from xml.dom import minidom

htmldoc = minidom.parse('riddles.html')
body = htmldoc.getElementsByTagName('body')[0]
spans_all = body.getElementsByTagName('span')
print spans_all

for lop in spans_all:
    spans = lop.firstChild.data
    print spans
