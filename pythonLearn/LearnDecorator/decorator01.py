def logger(func):
    def wrapper(*args, **kw):
        print('我准备开始执行：{} 函数了:'.format(func.__name__))

        # 真正执行的是这行。
        func(*args, **kw)

        print('主人，我执行完啦。')
    return wrapper

@logger
def add(a, b):
    return a + b

def main():
    add(1, 2)

if __name__ == "__main__":
    main()
