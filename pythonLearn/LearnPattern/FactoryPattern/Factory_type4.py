"""
抽象工厂模式：面对复杂问题的解决方案
    1. 产品等级结构
    2. 产品族
    3. 抽象工厂
    4. 具体工厂
    5. 抽象产品
    6. 具体产品
    如下感觉：
                                                Product
                                        (由 PartA + PartB + PartC 组成)
                                    PartA         PartB         PartC
                            Level1  Level1PartA  Level1PartB   Level1PartC   =>  Level1Product
    Factory                 Level2  Level2PartA  Level2PartB   Level2PartC   =>  Level2Product
(分别制造不同Level的产品)     Level3  Level3PartA  Level3PartB   Level3PartC   =>  Level3Product
"""

class Part:
    def __init__(self):
        pass
    def currentPart(self):
        return 'Part'

# part
class PartA(Part):
    def __init__(self):
        pass

class PartB(Part):
    def __init__(self):
        pass

class PartC(Part):
    def __init__(self):
        pass

# partA
class Level1PartA(PartA):
    def __init__(self):
        super().__init__()
    def currentPart(self):
        return 'Part A Level 1'
    
class Level2PartA(PartA):
    def __init__(self):
        super().__init__()
    def currentPart(self):
        return 'Part A Level 2'
    
class Level3PartA(PartA):
    def __init__(self):
        super().__init__()
    def currentPart(self):
        return 'Part A Level 3'

# partB   
class Level1PartB(PartB):
    def __init__(self):
        super().__init__()
    def currentPart(self):
        return 'Part B Level 1'

class Level2PartB(PartB):
    def __init__(self):
        super().__init__()
    def currentPart(self):
        return 'Part B Level 2'
    
class Level3PartB(PartB):
    def __init__(self):
        super().__init__()
    def currentPart(self):
        return 'Part B Level 3'

# partC
class Level1PartC(PartC):
    def __init__(self):
        super().__init__()
    def currentPart(self):
        return 'Part C Level 1'
    
class Level2PartC(PartC):
    def __init__(self):
        super().__init__()
    def currentPart(self):
        return 'Part C Level 2'

class Level3PartC(PartC):
    def __init__(self):
        super().__init__()
    def currentPart(self):
        return 'Part C Level 3'

class Product:
    __partA = None
    __partB = None
    __partC = None
    def __init__(self, partA, partB, partC):
        self.__partA = partA
        self.__partB = partB
        self.__partC = partC

    def show(self):
        print("Product:")
        print(self.__partA.currentPart())
        print(self.__partB.currentPart())
        print(self.__partC.currentPart())

class Factory:
    def __init__(self):
        pass
    def createProduct(self) -> Product:
        pass

# factory
class Level1Factroy(Factory):
    def __init__(self):
        super().__init__()
    def createProduct(self) -> Product:
        return Product(Level1PartA(), Level1PartB(), Level1PartC())
    
class Level2Factroy(Factory):
    def __init__(self):
        super().__init__()
    def createProduct(self) -> Product:
        return Product(Level2PartA(), Level2PartB(), Level2PartC())
    
class Level3Factroy(Factory):
    def __init__(self):
        super().__init__()
    def createProduct(self) -> Product:
        return Product(Level3PartA(), Level3PartB(), Level3PartC())
    
if __name__ == "__main__":
    l1factory = Level1Factroy()
    product1 = l1factory.createProduct()
    product1.show()

    l2factory = Level2Factroy()
    product2 = l2factory.createProduct()
    product2.show()

    l3factory = Level3Factroy()
    product3 = l3factory.createProduct()
    product3.show()
