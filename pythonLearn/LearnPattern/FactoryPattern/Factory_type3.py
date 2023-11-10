"""
工厂方法模式：抽象工厂提供接口，每一种产品对应一个工厂类，每个工厂类负责创建一种产品

感觉如下：
    1. 抽象工厂类：提供接口，每一种产品对应一个工厂类
    2. 工厂类：负责创建一种产品
    3. 抽象产品类：提供接口，每一种产品对应一个产品类
    4. 产品类：负责实现产品的功能

                A -> ProductA
    Factory     B -> ProductB       Product
                C -> ProductC
"""

class Product:
    def __init__(self, name):
        self.name = name
    def __str__(self):
        return self.name
    def introduce(self):
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
    每次增加产品类，只需要增加一个工厂类，符合开闭原则
    但是每次增加产品类，都需要增加一个工厂类，增加了代码量
    """
    def __init__(self):
        pass
    def createProduct(self) -> Product:
        pass

class FactoryA(Factory):
    def __init__(self):
        super().__init__()
    def createProduct(self) -> Product:
        return ProductA()
    
class FactoryB(Factory):
    def __init__(self):
        super().__init__()
    def createProduct(self) -> Product:
        return ProductB()
    
class FactoryC(Factory):
    def __init__(self):
        super().__init__()
    def createProduct(self) -> Product:
        return ProductC()
    
if __name__ == '__main__':
    factoryA = FactoryA()
    factoryB = FactoryB()
    factoryC = FactoryC()
    productA = factoryA.createProduct()
    productB = factoryB.createProduct()
    productC = factoryC.createProduct()
    productA.introduce()
    productB.introduce()
    productC.introduce()