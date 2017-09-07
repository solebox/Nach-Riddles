from xml.dom import minidom

xmldoc = minidom.parse('us-states.xml')
states = xmldoc.getElementsByTagName('states')[0]
state = states.getElementsByTagName('state')

for lop in state:
    print (state)