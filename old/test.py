#!/usr/bin/python

# Open a file
fo = open("foo.txt", "wb")
print "Name of the file: ", fo.name
fo.write('This is a test\n')
# Close opend file
fo.close()