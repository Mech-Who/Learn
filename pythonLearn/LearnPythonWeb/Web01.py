from urllib.request import urlopen
import re

p = re.compile('<a href="(/jobs/\\d+)/">(.*?)</a>')
text = urlopen('http://python.org/jobs').read().decode()
for url, name in p.findall(text):
    print('{} ({})'.format(name, url))

"""
这段代码的缺点：
1. 正则表达式一点都不容易理解。
2. 它对付不了独特的HTML内容

接下来将讨论两种可能的解决方案:
1. 结合使用程序Tidy（一个Python库）和XHTML解析；
    pip install tidy
2. 使用专为屏幕抓取而设计的Beautiful Soup库。
    pip install beautifulsoup4
"""
