import socket

# Create a socket object
client_socket = socket.socket()

hostname = '127.0.0.1'
# let's choose the number 9090 for our port
port = 9090

address = (hostname, port)

client_socket.connect(address)


# send data to server
data = 'Hello, server!'
client_socket.send(data.encode())

# receive data from server
response = client_socket.recv(1024)
# decoding from bytes to string
response = response.decode()
print(response)

# close the socket
client_socket.close()
