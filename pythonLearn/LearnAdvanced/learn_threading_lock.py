"""
# @Date:2025-05-14
# @LastEditors:HuShuhan 873933169@qq.com
# @LastEditTime:2025-05-14
# @FilePath:\pythonLearn\LearnAdvanced\learn_threading_lock.py
# @Description:TBD
# @联系QQ: 873933169
# @Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
"""
import time

from concurrent.futures import ThreadPoolExecutor
from threading import RLock


class Account(object):
    """银行账户"""

    def __init__(self, no_lock: bool=False):
        self.balance = 0.0
        self.no_lock = no_lock
        if self.no_lock:
            return
        self.lock = RLock()

    def deposit(self, money):
        # 通过上下文语法获得锁和释放锁
        if self.no_lock:
            new_balance = self.balance + money
            time.sleep(0.01)
            self.balance = new_balance
            return
        with self.lock:
            new_balance = self.balance + money
            time.sleep(0.01)
            self.balance = new_balance


def main():
    """主函数"""
    account1 = Account(no_lock=True)
    account2 = Account(no_lock=False)
    with ThreadPoolExecutor(max_workers=16) as pool:
        for _ in range(100):
            pool.submit(account1.deposit, 1)
        for _ in range(100):
            pool.submit(account2.deposit, 1)
    print("Account no lock: ", account1.balance)
    print("Account with lock: ", account2.balance)


if __name__ == '__main__':
    main()
