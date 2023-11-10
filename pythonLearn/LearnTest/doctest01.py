# coding:utf-8 

def square(x):
    """
    计算平方并返回结果
    >>> square(2)
    4
    >>> square(3)
    9
    """
    return x*x


if __name__ =='__main__': 
    import doctest
    import doctest01
    doctest.testmod(doctest01) 
