#!/usr/bin/env python
"""
setup.py file for SWIG example
"""
from distutils.core import setup, Extension

palindrome_module = Extension('_palindrome',
    sources=['palindrome_wrap.c', 'palindrome.c'],
)

setup (name = 'palindrome',
        version = '0.1',
        author = "SWIG Docs",
        description = """Simple swig example from docs""",
        ext_modules = [palindrome_module],
        py_modules = ["palindrome"],
)
