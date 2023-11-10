"""
简单工厂模式（实现1）： 工厂类中一个函数对应生成一种产品

感觉如下：
    1. 工厂类：负责创建产品
    2. 抽象产品类：提供接口，每一种产品对应一个产品类
    3. 产品类：负责实现产品的功能
    
                    -> ProductA
            Factory -> ProductB      Product
                    -> ProductC
"""
class ProductA:
    def __init__(self):
        self.name = 'ProductA'

    def get_name(self):
        return self.name
    
    def introduce(self):
        print('I am ', self.name)

class ProductB:
    def __init__(self):
        self.name = 'ProductB'

    def get_name(self):
        return self.name
    
    def introduce(self):
        print('I am ', self.name)

class ProductC:
    def __init__(self):
        self.name = 'ProductC'

    def get_name(self):
        return self.name
    
    def introduce(self):
        print('I am ', self.name)

class Factory:
    """
    每次增加类都需要修改这个类，不符合开闭原则
    """
    def __init__(self):
        pass
    
    def createProductA(self) -> ProductA:
        return ProductA()
    
    def createProductB(self) -> ProductB:
        return ProductB()
    
    def createProductC(self) -> ProductC:
        return ProductC()
    
if __name__ == '__main__':
    factory = Factory()
    productA = factory.createProductA()
    productB = factory.createProductB()
    productC = factory.createProductC()
    productA.introduce()
    productB.introduce()
    productC.introduce()