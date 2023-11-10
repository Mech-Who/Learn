# 通用网关接口（CGI）
# Python CGI编程的关键工具是模块cgi
# 另一个对开发CGI脚本很有帮助的模块是cgitb

# python -m http.server --cgi
# 开启一个文件服务器，类似于其他学校做的镜像源

"""
linux:
#!/usr/bin/env python
或
#!/usr/bin/python

windows:
#!C:\Python36\python.exe
"""

#!/usr/bin/env python 

print('Content-type: text/plain') 
print()# 打印一个空行，以结束首部

print('Hello, world!')
