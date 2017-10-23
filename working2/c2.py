#this file convert the file from csv to json

# Open a file
riddle_converted = open("riddle-converted-for.csv", "r",)
json = open("riddle-the-new-json.json", "w",)
dict1 = {}
list1 = []
for loop in range(1188):
    first_line = riddle_converted.readline()
    list_of_line = first_line.replace('.','').strip().split(',')
    list_of_key = ['riddle_number', 'book', 'riddle_section', 'parallel', 'riddle_letter', 'riddle', 'answer']
    print(list_of_line)
    for list_loop in range(len(list_of_line)):
        dict1[list_of_key[list_loop]] = list_of_line[list_loop]
    list1.append(dict1)
    print(list1)

json.write(str(list1))
json.close()
