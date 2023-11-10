#!/usr/bin/env python 

import cgi 

print("Content-type: text/html ")

form = cgi.FieldStorage() 

name = form.getvalue('name', 'world') 

print("""
<html> 
 <head> 
 <title>Greeting Page</title> 
 </head> 
 <body> 
 <h1>Hello, {}!</h1> 
 <form action='sample3.py'> 
 Change name <input type='text' name='name' /> 
 <input type='submit' /> 
 </form> 
 </body> 
</html> 
""".format(name))
