
#this script convert csv file to json format
import os
import stat

#os.mknod('c1p1-conv20.csv', 0600|stat.S_IRUSR)

#the file name is chepter 1 part 1 and is contain 22 riddels
original_file = open("c1p1.csv","r")
converted_file = open("c1p1-conv.csv","w")
line1 = original_file.readline()
all_list =[]

#defination for find howmuch lines in the file
#and return tham for future loop
def file_len(fname):
    with open(fname) as f:
        print enumerate(f)
        for loop, l in enumerate(f):
            pass
    return loop + 1

#defination for make and order the line as a list()
def first_line_list(line1):
    word = ''
    list1 = []
    for loop in range(len(line1)):
        if line1[loop] == ",":
            list1.append(word)
            word = ''
            continue
        word += line1[loop]
    return list1

#append the all chepter to one list()
for loop in range(file_len("c1p1.csv")):
    all_list.append(first_line_list(original_file.readline()))

#rearange the list for json file
#for loop in range(file_len("c1p1.csv")[0]):
#    print loop

list_of_line1 = first_line_list(line1)
print len(list_of_line1)
print first_line_list(line1)
print type(line1)
dic1 = {list_of_line1[0]}
dic1
print ''.join(line1)
print converted_file
print all_list
print 'this is all'
