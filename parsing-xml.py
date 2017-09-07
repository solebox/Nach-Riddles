from xml.dom import minidom

xmldoc = minidom.parse('rows.xml')
response = xmldoc.getElementsByTagName('response')[0]
row = response.getElementsByTagName('row')[0]
row2 = row.getElementsByTagName('row')

for lop in row2:
    citys = lop.getElementsByTagName('city')[0]
    print (lop)