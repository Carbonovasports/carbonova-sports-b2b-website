# -*- coding: utf-8 -*-
import re

css = open(r'E:/阿里巴巴/ACCIO/carbonova-site/assets/css/styles.css', encoding='utf-8').read()
# find specific rules
for name in [r'\.content-wrap', r'\.article', r'\.sidebar', r'\.sidebar-box', r'\.breadcrumbs', r'\.meta', r'\.blog-card', r'\.more', r'blockquote', r'\.article table', r'\.article h2', r'\.article p']:
    pat = re.compile(name + r'[^{]*\{[^}]*\}')
    for m in pat.finditer(css):
        print(m.group(0)[:600])
        print('---')
