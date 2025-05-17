def calc_average():
    total, counter = 0, 0
    avg_value = None
    while True:
        curr_value = yield avg_value
        total += curr_value
        counter += 1
        avg_value = total / counter


def main():
    obj = calc_average()
    # 通过生成器对象的send方法发送一个None值来将其激活为协程
    # 也可以通过next(obj)达到同样的效果。
    obj.send(None)
    for _ in range(5):
        print(obj.send(float(input())))


if __name__ == "__main__":
    main()
