# 用于文件输入的模块
import fileinput

for line in fileinput.input(inplace=True):
    line = line.rstrip()
    num = fileinput.lineno()
    print('{:<50} # {:2d}'.format(line, num))

"""
使用指令：
cat param.txt | python fileinput_txt.py
不会改变文件内容，只会修改输出内容

但是如果使用指令
python fileinput_txt.py param.txt
则会修改文件内容（当inplace参数设置为True时）
"""
