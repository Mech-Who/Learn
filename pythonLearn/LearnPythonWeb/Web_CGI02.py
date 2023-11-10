"""
为帮助调试CGI脚本，标准库提供了一个很有用的模块，
名为cgitb（用于CGI栈跟踪）。

请注意，程序开发好后，应关闭这种cgitb功能，
因为栈跟踪页面并非供程序的普通用户查看的。
"""

#!/usr/bin/env python
import cgitb

cgitb.enable()

print('Content-type: text/html\n')

print(1/0)

print('Hello, world!')
