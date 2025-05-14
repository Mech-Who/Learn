"""
# @Date:2025-05-14
# @LastEditors:HuShuhan 873933169@qq.com
# @LastEditTime:2025-05-14
# @FilePath:\pythonLearn\LearnAdvanced\learn_threading.py
# @Description: 学习python的多线程编程
# @联系QQ: 873933169
# @Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
"""
import time
from threading import Thread
from concurrent.futures import ThreadPoolExecutor


def display(content: str, sleep_time: int) -> None:
    time.sleep(sleep_time)
    print(content, "sleep over: ", sleep_time, flush=True)


# 2. 通过继承Thread实现多线程
class DisplayThread(Thread):
    def __init__(self, content: str, sleep_time: int, daemon: bool) -> None:
        self.content = content
        self.sleep_time = sleep_time
        super().__init__(daemon=daemon)
        
    def run(self):
        display(self.content, self.sleep_time)


def main():
    """
    手动实现多线程
    - target: 函数名（线程要执行的任务）
    - args: 不具名参数，通过元组传参
    - kwargs: 具名参数，通过字典传参，key为参数名称，value为参数值
    - daemon: 设置该线程是否为守护线程，True为守护线程，False为非守护线程。
              守护线程会在主进程结束时立即结束；非守护线程会阻塞主线程的结束，直到此线程结束才结束阻塞。
    """
    print(f"{'='*20}[ Step-1 start ]{'='*20}")
    threads = [
        # 1. 通过Thread类直接实现多线程
        Thread(target=display, args=("Ping",1), daemon=True),
        Thread(target=display, args=("Pong",2), daemon=True),
        # 2. 通过继承Thread实现多线程
        DisplayThread("DPing", 3, True),
        DisplayThread("DPong", 4, True),
    ]
    
    for thread in threads:
        thread.start()
    for thread in threads:
        thread.join()
    
    """
    使用 线程池 实现多线程
    - 线程池默认使用daemon=False参数, 如果需要守护线程，则需要重写ThreadPoolExecutor中的ThreadFactory
    - 线程池中的线程默认会调用join进行等待
    """
    print(f"{'='*20}[ Step-2 start ]{'='*20}")
    with ThreadPoolExecutor(max_workers=2) as pool:
        pool.submit(display, content="PPing", sleep_time=1)
        pool.submit(display, content="PPong", sleep_time=2)
        pool.submit(display, content="PPang", sleep_time=3)
        pool.submit(display, content="PPeng", sleep_time=4)

    time.sleep(2)
    print("Main Sleep over!")


if __name__ == "__main__":
    main()
