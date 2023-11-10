class Singleton(object):
    """
    设计模式————单例模式
    """
    def __init__(self):
        """
        __init__
        实例方法:
        是当实例对象创建完成后被调用的，
        然后设置对象属性的一些初始值，
        通常用在初始化一个类实例的时候。
        """
        print("__init__")
        pass

    def __new__(cls):
        """
        __new__
        静态方法:
        是在实例创建之前被调用的，
        因为它的任务就是创建实例然后返回该实例对象。
        """
        print("__new__")
        if not hasattr(cls, 'instance'):
            cls.instance = super(Singleton, cls).__new__(cls)
        return cls.instance
        pass

s0 = Singleton()
print('Singleton item:', s0)
s1 = Singleton()
print('Singleton item:', s1)
