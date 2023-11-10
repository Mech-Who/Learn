from tkinter import *

top = Tk()


def callback(event):
    print(event.x, event.y)


top.bind('<Button-1>', callback)

# mainloop要放在最后，不然各种设置出不来
mainloop()
