
# Open a file
doc = open("html.txt", "r",)
test = open("test.txt", "w",)

list1=[]
newline = ''
for riddles in range(0,3):
    line = doc.readline()
    if "ספר" in line:
        #loop for he two titles
        for this_section in range(0,2):
            list1.append(line.rstrip())
            line = doc.readline()
            while line =="\n":
                line = doc.readline()
            list1.append(line.rstrip())
            for _24riddles in range(0,24):#loop for 24 riddles in this section

            line = doc.readline()
            list1.append(line.rstrip())
            print (list1)

