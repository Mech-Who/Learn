"""
# @Date:2025-05-21
# @LastEditors:HuShuhan 873933169@qq.com
# @LastEditTime:2025-05-21
# @FilePath:\pythonLearn\LearnAdvanced\learn_threading_dist_master.py
# @Description:TBD
# @联系QQ: 873933169
# @Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
"""

import random
import queue
from queue import Queue

# from multiprocessing import Queue
from multiprocessing.managers import BaseManager


# 发送任务的队列:
task_queue = Queue()
# 接收结果的队列:
result_queue = Queue()


# 从BaseManager继承的QueueManager:
class QueueManager(BaseManager):
    pass


def get_task_queue():
    """
    win下queuemanager注册到网络关联队列不能用lambda，所以自定义一个函数用于关联
    """
    global task_queue
    return task_queue


def get_result_queue():
    """
    win下queuemanager注册到网络关联队列不能用lambda，所以自定义一个函数用于关联
    """
    global result_queue
    return result_queue


def main():
    # 把两个Queue都注册到网络上, callable参数关联了Queue对象:
    QueueManager.register("get_task_queue", callable=lambda: get_task_queue)
    QueueManager.register("get_result_queue", callable=lambda: get_result_queue)
    # 绑定端口5000, 设置验证码'abc':
    manager = QueueManager(address=("127.0.0.1", 5000), authkey=b"abc")
    # 启动Queue:
    manager.start()
    # 获得通过网络访问的Queue对象:
    task = manager.get_task_queue()
    result = manager.get_result_queue()
    # 放几个任务进去:
    for i in range(10):
        n = random.randint(0, 10000)
        print("Put task %d..." % n)
        task.put(n)
    # 从result队列读取结果:
    print("Try get results...")
    try:
        for i in range(10):
            r = result.get(timeout=10)  # 监听结果队列，获取结果数
            print("Result:%s" % r)
    except queue.Empty:
        print("queue is empty")  # 调试空队列错误
    finally:
        manager.shutdown()  # 不管前面代码是否有误，只要manager.start()，必须关闭，不然再次打开会报错
        print("master exit.")


if __name__ == "__main__":
    main()
