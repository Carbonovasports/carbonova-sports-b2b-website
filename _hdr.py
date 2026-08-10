# -*- coding: utf-8 -*-
import re

html = open(r'E:/阿里巴巴/ACCIO/carbonova-site/blog/thermoformed-guide.html', encoding='utf-8').read()
# head
m = re.search(r'<head>.*?</head>', html, re.S)
head = re.sub(r'><', '>\n<', m.group(0))
print('=== HEAD ===')
print(head)
print()
# header block
m2 = re.search(r'<header class="site-header".*?</header>', html, re.S)
hdr = re.sub(r'><', '>\n<', m2.group(0))
print('=== HEADER ===')
print(hdr)
