import urllib.request
import json
import re

def submit_to_indexnow():
    with open("sitemap.xml", "r", encoding="utf-8") as f:
        sitemap_content = f.read()

    urls = re.findall(r'<loc>(https://www\.carbonovasports\.com/[^<]*)</loc>', sitemap_content)
    
    payload = {
        "host": "www.carbonovasports.com",
        "key": "78d8b94561fdb3f0fa1039566dffcf19",
        "keyLocation": "https://www.carbonovasports.com/78d8b94561fdb3f0fa1039566dffcf19.txt",
        "urlList": urls
    }

    req = urllib.request.Request(
        "https://api.indexnow.org/indexnow",
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST"
    )

    try:
        with urllib.request.urlopen(req) as resp:
            print(f"IndexNow API Status Code: {resp.status} (200/202 = Success!)")
            print(f"Submitted {len(urls)} canonical URLs to Bing / IndexNow protocol.")
            return True
    except urllib.error.HTTPError as e:
        print(f"IndexNow HTTP Error: {e.code} - {e.read().decode('utf-8')}")
        return False
    except Exception as e:
        print(f"IndexNow Exception: {e}")
        return False

if __name__ == '__main__':
    submit_to_indexnow()
