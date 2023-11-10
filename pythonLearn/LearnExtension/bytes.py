# define a byte string
a_byte = b'1234'
b_byte = b'abcd'

# use bytes() to convert a string to a byte string
c_byte = bytes('This is a string', encoding='utf-8')
d_byte = bytes('中文', 'utf-8')

# use bytearray() to convert a string to a byte string, this way will allow you to change the string
e_byte = bytearray('This is a string', encoding='utf-8')
f_byte = bytearray('中文', 'utf-8')

# use encode() to convert a string to a byte string
g_byte = 'This is a string'.encode('utf-8')
h_byte = '中文'.encode('utf-8')

# use decode() to convert a byte string to a string
i_str = g_byte.decode('utf-8')
j_str = h_byte.decode('utf-8')

# try to_bytes() to convert a string or int to a byte string
k_byte = (1024).to_bytes(2, byteorder='big')
l_byte = (55).to_bytes(1, byteorder='little')

# try from_bytes() to convert a byte string to a int
m_int = int.from_bytes(k_byte, byteorder='big')
n_int = int.from_bytes(l_byte, byteorder='little')
