# 打开远程文件
from urllib.request import urlopen

webpage = urlopen('http://www.python.org')

# 使用正则表达式
import re

text = webpage.read()
m = re.search(b'<a href="([^"]+)" .*?>about</a>', text, re.IGNORECASE)
m.group(1)

# 获取远程文件
from urllib.request import urlretrieve, urlcleanup

urlretrieve('http://www.python.org', './download/python_webpage.html')

# 清除临时文件（使用urlretrieve时，如果不加文件名参数即为临时文件）
urlcleanup()

# 操作URL
from urllib.parse import quote, quote_plus, unquote, unquote_plus

url = 'https://space.bilibili.com/1567748478/channel/seriesdetail?sid=358497'

print(quote(url, safe='/'))
print(quote_plus(url, safe='/'))

quoted_url = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=abc%20def&oq=abc&rsv_pq=c6240bfa0005ae35&rsv_t=08fdJPDRA%2B0BpF5MdKYCpl8h6kjanenaidg%2FugiPUBILd7KNXEexCRFlqxA&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=5&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&rsv_btype=t&inputT=1609&rsv_sug4=1761'
print(unquote(url))
print(unquote_plus(url))

from urllib.parse import urlencode

print(urlencode({'name': 'Mike'}))
