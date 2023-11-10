import socket

host = '127.0.0.1'
port = 9090
addr = (host, port)

# 址创建socket 配置socket协议簇为AF_INET，连接类型为长连接SOCK_STREAM
server_socket = socket.socket()

# 将创建的socket绑定到上面的服务地址
server_socket.bind(addr)

# 设置可接收的最大连接数
server_socket.listen(3)

# 同步等待客户端的主动连接,并读取客户端发来的信息
while True:
    con, addr = server_socket.accept()
    request = con.recv(2048)
    print(request.decode())
    if request.decode() == 'qwerty':
        con.sendall('Connection Success!'.encode('utf-8'))
    else:
        con.sendall('Wrong password!'.encode('utf-8'))
    con.close()
