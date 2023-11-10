"""
简单工厂模式（实现2）： 工厂类中一个函数通过传入不同的参数来生成各种产品，一个参数对应一种产品

感觉如下：
    1. 工厂类：负责创建产品
    2. 抽象产品类：提供接口，每一种产品对应一个产品类
    3. 产品类：负责实现产品的功能
"""

class Product:
    def __init__(self, name):
        self.name = name
    def __str__(self):
        return self.name
    def inroduce():
        pass

class ProductA(Product):
    def __init__(self):
        super().__init__('ProductA')
    def introduce(self):
        print('I am ', self.name)

class ProductB(Product):
    def __init__(self):
        super().__init__('ProductB')
    def introduce(self):
        print('I am ', self.name)

class ProductC(Product):
    def __init__(self):
        super().__init__('ProductC')
    def introduce(self):
        print('I am ', self.name)

class Factory:
    """
    一个函数返回不同的产品的工厂
    每次增加类都需要修改这个函数，不符合开闭原则
    """
    def __init__(self):
        pass
    def createProduct(self, product_type) -> Product:
        if product_type == "A":
            return ProductA()
        elif product_type == "B":
            return ProductB()
        elif product_type == "C":
            return ProductC()
        
if __name__ == "__main__":
    factory = Factory()
    productA = factory.createProduct("A")
    productB = factory.createProduct("B")
    productC = factory.createProduct("C")
    productA.introduce()
    productB.introduce()
    productC.introduce()