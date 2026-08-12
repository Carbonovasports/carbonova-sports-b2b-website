# -*- coding: utf-8 -*-
import re
base = r'E:/阿里巴巴/ACCIO/carbonova-site/'
out = []
for f in ['products.html', 'factory.html']:
    html = open(base + f, encoding='utf-8').read()
    for m in re.finditer(r'aerosoul', html, re.I):
        s = max(0, m.start() - 260)
        e = min(len(html), m.end() + 260)
        out.append(f + ' ...' + re.sub(r'\s+', ' ', html[s:e]) + '...')
open(base + '_x.txt', 'w', encoding='utf-8').write('\n\n'.join(out))
print('ok')
