from xml.dom import minidom

data = minidom.parse('test.xml')

name = minidom.getElementByTagName('name')[0]
print 'Name:' ,tree.find('name').text
print name