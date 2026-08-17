import urllib.request

def get(u):
    req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
    return urllib.request.urlopen(req, timeout=30).read().decode('utf-8', 'ignore')

p = get('https://www.carbonovasports.com/padel.html')
print('live padel-product-card class count:', p.count('class="card padel-product-card"'))

css = get('https://www.carbonovasports.com/assets/css/styles.css')
print('live css len:', len(css))
print('live css has .padel-product-card img:', '.padel-product-card img' in css)
print('live css has full rule:', 'display:block;width:100%;height:auto;max-width:100%;object-fit:contain;aspect-ratio:auto' in css)
idx = css.rfind('.padel-product-card img')
print('rule at position:', idx, 'of', len(css))
print('tail 300 chars:', repr(css[-300:]))
