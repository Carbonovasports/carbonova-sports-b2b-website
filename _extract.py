# -*- coding: utf-8 -*-
import re, io, sys

base = r'E:/阿里巴巴/ACCIO/carbonova-site/'
out = []
for f in ['product-kevlar', 'product-titanium', 'product-gen5-foam-core']:
    html = open(base + f + '.html', encoding='utf-8').read()
    m = re.search(r'<main.*?</main>', html, re.S)
    main = re.sub(r'<script.*?</script>', '', m.group(0), flags=re.S)
    text = re.sub(r'<[^>]+>', ' ', main)
    text = re.sub(r'\s+', ' ', text).strip()
    out.append('=' * 15 + ' ' + f + ' ' + '=' * 15)
    out.append(text[:4000])
open(base + '_extract.txt', 'w', encoding='utf-8').write('\n\n'.join(out))
print('done')
