from tkinter import *

top = Tk()

# 创建出来时，控件是不可见的
# btn = Button()
# 管理器
# 对控件调用方法pack时，将把控件放在其父控件（主控件）中。要指定主控件，可使用构造
# 函数的第一个可选参数；如果没有指定，将把顶级主窗口用作主控件
# btn.pack()

# # 添加属性text
# btn['text'] = 'Click me!'


def clicked():
    print('I was clicked!')


# # 添加属性command
# btn['command'] = clicked

# 可以不分别给属性赋值，而使用方法config同时设置多个属性
# btn.config(text='Click me!', command=clicked)
# 也可以使用控件的构造函数来配置控件
Button(text='Click me too!', command=clicked).pack()

Label(text="I'm in the first window!").pack()

second = Toplevel()
Label(second, text="I'm in the second window!").pack()

for i in range(10):
    Button(text=i).pack()

mainloop()

help(Pack.config)
help(Grid.config)
help(Place.config)
