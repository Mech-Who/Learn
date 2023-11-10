file_name = 'test.txt'

# r 4 read, w 4 write, a 4 append, + 4 update
# b 4 binary, t 4 text
# open a file for reading
file = open(file_name, 'r', encoding='utf-8')

# read whole file
file.read()

byte_number = 10
# read some bytes
file.read(byte_number)

# read one line
file.readline()

line_number = 10
# read some lines
file.readline(line_number)

# read all lines
file.readlines()

# close the file
file.close()

################################################################

# open a file for writing
file = open(file_name, 'w', encoding='utf-8')

strings = ["Hello World!\n", "Hello Python!\n"]
# write to the file
file.write(strings[0])

# write a list of strings to the file
file.writelines(strings)

# close the file
file.close()

################################################################

# manager context
with open(file_name, 'a', encoding='utf-8') as file:
    file.write("Hello World!\n")
