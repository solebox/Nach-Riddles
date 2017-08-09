
#this script convert csv file to json format
import os
import stat
import codecs

#defination for convert str line to list()
#and return the list()
def str_to_list(line1):
    word = ''
    list1 = []
    for loop in range(len(line1)):
        if line1[loop] == ",":
            list1.append(word)
            word = ''
            continue
        word += line1[loop]
    list1.append(word)
    return list1

#defination for find how much lines in the file
#we using this lines number in future loop
def lines_number(fname):
    with open(fname) as f:
        for loop, l in enumerate(f):
            pass
    return loop + 1

#the file name is chepter 1 part 1 and is contain 22 riddels
#opening the file, read it and save it in object
original_file = open("c1p1-En.csv","r")

#read the first line and using def() for convert the line to list
line1 = str_to_list(original_file.readline())

#save the lines number minus the first line in object
lines_number = lines_number("c1p1-En.csv") - 1

#loop on loop
#we make a dict in list at the next way:
#we take the keys from line1 and we make for this keys values using the index base on the loop number
#at the end of this loop we will have list that look like JSON string
dict1 = {}
str1 = ''
listall = []
for i in range(lines_number):
    dict1 = {}
    next_line = str_to_list(original_file.readline())
    for loop in range(len(line1)):
        dict1[line1[loop]] = next_line[loop]
    listall.append(dict1)


#creat a new file for this section
#os.mknod('c1p1-En.json', 0600|stat.S_IRUSR)

#open the file we just created and save in it the list that we created
thefile = open('c1p1-En.json', 'w')
for item in listall:
  thefile.write("%s\n" % item)


original_file.close()
print "convert DONE!"

