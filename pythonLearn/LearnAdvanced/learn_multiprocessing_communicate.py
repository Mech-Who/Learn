from multiprocessing import Process, Queue
from time import sleep

counter = 0
total = 10


def sub_task(content, queue):
    counter = queue.get()
    while counter < total:
        print(content, end="", flush=True)
        counter += 1
        queue.put(counter)
        sleep(0.01)
        counter = queue.get()


def main():
    queue = Queue()
    queue.put(0)
    p1 = Process(target=sub_task, args=("Ping", queue))
    p2 = Process(target=sub_task, args=("Pong", queue))
    p1.start()
    p2.start()
    while p1.is_alive() and p2.is_alive():
        pass
    queue.put(50)


if __name__ == "__main__":
    main()
