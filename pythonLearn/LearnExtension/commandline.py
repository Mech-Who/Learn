import sys

args = sys.argv

if len(args) != 3:
    print("Usage: python commandline.py <arg1> <arg2>")
    sys.exit(1)
else:
    print("arg1: %s" % args[1])
    print("arg2: %s" % args[2])
    sys.exit(0)