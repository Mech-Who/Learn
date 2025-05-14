"""
# @Date:2025-05-14
# @LastEditors:HuShuhan 873933169@qq.com
# @LastEditTime:2025-05-14
# @FilePath:\pythonLearn\LearnAdvanced\learn_multiprocessing.py
# @Description:TBD
# @联系QQ: 873933169
# @Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
"""
from multiprocessing import Process, current_process
from time import sleep
from concurrent.futures import ProcessPoolExecutor


def sub_task(content, nums):
    # 通过current_process函数获取当前进程对象
    # 通过进程对象的pid和name属性获取进程的ID号和名字
    PID = current_process().pid
    NAME = current_process().name
    print(f'PID: {PID}')
    print(f'Name: {NAME}')
    # 通过下面的输出不难发现，每个进程都有自己的nums列表，进程之间本就不共享内存
    # 在创建子进程时复制了父进程的数据结构，三个进程从列表中pop(0)得到的值都是20
    counter, total = 0, nums.pop(0)
    print(f'Loop count: {total}')
    sleep(0.5)
    while counter < total:
        counter += 1
        print(f'{PID}-{NAME}: {counter}-{content}')
        sleep(0.01)


class TaskProcess(Process):
    def __init__(self, content, nums):
        super().__init__()
        self.content = content
        self.nums = nums
        
    def run(self):
        sub_task(self.content, self.nums)


def main() -> None:
    nums = [3, 5, 7]
    """
    手动实现多进程
    """
    print(f"{'='*20}[ Step-1 start ]{'='*20}")
    processes = [
        # 1. 手动创建并启动进程来执行指定的函数
        Process(target=sub_task, args=('Ping', nums)),
        Process(target=sub_task, args=('Pong', nums)),
        # 2. 继承Process实现多进程
        TaskProcess("TPing", nums),
        TaskProcess("TPong", nums),
    ]

    for process in processes:
        process.start()
    for process in processes:
        process.join()

    """
    使用进程池实现多进程
    - 进程池中的进程默认会调用join进行等待
    """
    print(f"{'='*20}[ Step-2 start ]{'='*20}")
    with ProcessPoolExecutor(max_workers=2) as pool:
        pool.submit(sub_task, content="PPing", nums=nums)
        pool.submit(sub_task, content="PPong", nums=nums)
        pool.submit(sub_task, content="PPang", nums=nums)

    # 在主进程中执行sub_task函数
    sub_task('Good', nums)


if __name__ == "__main__":
    main()
