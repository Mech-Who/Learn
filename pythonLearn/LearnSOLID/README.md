# SOLID 原则

## 一、 S：单一职责原则（Single Responsibility Principle）

> “一个类应该仅仅只有一个被修改的理由。”

### 1.1 基本内容

每一个类都应该只具有一种职责。

### 1.2 坏处

1. 如果某个类违反了“单一职责原则”，那意味着我们经常会因为不同的原因去修改它。这可能会导致不同功能之间相互影响。
2. 另外，单个类承担的职责越多，意味着这个类的复杂度也就越高，它的维护成本也同样会水涨船高。
3. 违反“单一职责原则”的类同样也难以被复用

### 1.3 指导方案

1. 把大类拆分为多个小类
2. 使用函数

   “单一职责原则”虽然是针对类说的，但其实它的适用范围可以超出类本身。比如在 Python 中，通过定义函数，同样也可以让上面的代码符合单一职责原则。

   将“文件写入”职责拆分为新函数是一个 Python 特色的解决方案，它虽然没有那么 OO（面向对象），但是同样满足“单一职责原则”，而且在很多场景下更灵活与高效。

### 1.4 总结

- “S: 单一职责原则” 认为一个类只应该有一种被修改的原因
- 编写更小的类通常更不容易违反 S 原则
- S 原则同样适用于函数，你可以让函数和类协同工作

## 二、 O：开放-关闭原则（Open-closed Principle）

> “类应该对扩展开放，对修改封闭。”
>
> “你应该可以在不修改某个类的前提下，扩展它的行为。”

### 2.1 基本内容

类应该通过扩展而不是修改的方式改变自己的行为。

### 2.2 指导方案

1. 使用类继承来改造代码

   继承是面向对象理论中最重要的概念之一。它允许我们在父类中定义好数据和方法，然后通过继承的方式让子类获得这些内容，并可以选择性的对其中一些进行重写，修改它的行为。

   使用继承的方式来让类遵守“开放-关闭原则”的关键点在于：**找到父类中会变动的部分，将其抽象成新的方法（或属性），最终允许新的子类来重写它以改变类的行为**。

2. 使用组合与依赖注入来改造代码

   虽然类的继承特性很强大，但它并非唯一办法，依赖注入（Dependency injection） 是解决这个问题的另一种思路。

   与继承不同，依赖注入允许我们在类实例化时，通过参数将业务逻辑的变化点：_帖子过滤算法_ 注入到类实例中。最终同样实现“开放-关闭原则”。

3. 使用数据驱动思想来改造代码

   在实现“开放-关闭”原则的众多手法中，除了继承与依赖注入外，还有一种经常被用到的方式：“数据驱动”。这个方式的核心思想在于：**将经常变动的东西，完全以数据的方式抽离出来。**当需求变动时，只改动数据，代码逻辑保持不动。

   它的原理与“依赖注入”有一些相似，同样是把变化的东西抽离到类外部。不同的是，后者抽离的通常是类，而前者抽离的是数据。

   与前面的继承和依赖注入方式相比，“数据驱动”的代码更简洁，不需要定义额外的类。但它同样也存在缺点：它的可定制性不如前面的两种方式。

如何选择合适的方式来让代码符合“开放-关闭原则”，需要根据具体的需求和场景来判断。这也是一个无法一蹴而就、需要大量练习和经验积累的过程。

### 2.3 总结

- “O: 开放-关闭原则” 认为类应该对改动关闭，对扩展开放
- 找到需求中频繁变化的那个点，是让类遵循 O 原则的重点所在
- 使用子类继承的方式可以让类遵守 O 原则
- 通过定义算法类，并进行依赖注入，也可以让类遵循 O 原则
- 将数据与逻辑分离，使用数据驱动的方式也是改造代码的好办法

## 三、 L：里氏替换原则（Liskov Substitution Principle）与继承

> “当你使用继承时，子类（派生类）对象应该可以在程序中替代父类（基类）对象使用，而不破坏程序原本的功能。”

### 3.1 基本内容

和前面两条非常抽象的原则不同，“里氏替换原则”是一条非常具体的，和类继承有关的原则。

在 OOP 世界里，继承算是一个非常特殊的存在，它有点像一把无坚不摧的双刃剑，强大且危险。合理使用继承，可以大大减少类与类之间的重复代码，让程序事半功倍，而不当的继承关系，则会让类与类之间建立起错误的强耦合，带来大片难以理解和维护的代码。

正是因为这样，对继承的态度也可以大致分为两类。大多数人认为，继承和多态、封装等特性一样，属于面向对象编程的几大核心特征之一。而同时有另一部分人觉得，继承带来的 坏处远比好处多。甚至在 Go 这门相对年轻的编程语言里，设计者直接去掉了继承，提倡完全使用组合来替代。

从我个人的编程经验来看，继承确实极易被误用。要设计出合理的继承关系，是一件需要深思熟虑的困难事儿。不过幸运的是，在这方面，"里氏替换原则"(后简称 L 原则) 为我们提供了非常好的指导意义。

### 3.2 常见错误

1. 继承类不支持父类的所有操作。

2. 子类方法的返回值不支持父类同一方法的返回值的所有操作。

3. 子类方法的参数不完全支持父类方法的参数。

### 3.3 指导方案

SOLID 里的每条原则并非完全独立的个体，它们之间其实互有联系。

1. 重新设计类之间的继承关系。

   具体点来说，子类不能只是简单通过抛出异常的方式对某个类方法进行“退化”。如果 “对象不能支持某种操作” 本身就是这个类型的 核心特征 之一，那我们在进行父类设计时，就应该把这个 核心特征 设计进去。

2. 分析父类方法返回结果。

   要符合 L 原则，我们一定得让子类方法和父类返回同一类型的结果，支持同样的操作。或者更进一步，返回支持更多种操作的子类型结果也是可以接受的。

3. 让子类的方法参数签名和父类完全一致，或者更宽松。

### 3.4 总结

- “L：里氏替换原则”认为子类应该可以任意替换父类被使用
- 在类的使用方增加具体的类型判断（isinstance），通常不是最佳解决方案
- 违反里氏替换原则，通常也会导致违反“开放-关闭”原则
- 考虑什么是类的核心特征，然后为父类增加新的方法和属性可以帮到你
- 子类方法应该和父类同名方法返回同一类型，或者返回支持更多操作的子类型也行
- 子类的方法参数应该和父类同名方法完全一致，或者更为宽松

## 四、 I：接口隔离原则（Interface Segregation Principles）

> “客户（client）应该不依赖于它不使用的方法。”

### 4.1 基本内容

接口隔离原则（后简称 I 原则）全称为 “Interface Segregation Principles”。顾名思义，它是一条和“接口（Interface）”有关的原则。

我在前面解释过何为“接口（Interface）”。接口是模块间相互交流的抽象协议，它在不同的编程语言里有着不同的表现形态。比如在 Go 里它是 type ... interface，而在 Python 中它可以是抽象类、普通类或者函数，甚至某个只在你大脑里存在的一套协议。

这里说的“客户（Client）”指的是接口的使用方 （客户程序），也就是调用接口方法的高层模块。

在 I 原则看来，**一个接口所提供的方法，应该就是使用方所需要的方法，不多不少刚刚好。** 所以，在上个例子里，我们设计的接口 HNWebPage 是符合接口隔离原则的。因为它没有向使用方提供任何后者不需要的方法 。

### 4.2 常见错误

1. 接口提供了子类不需要的方法。

2. 只需要使用模块一部分时，引入了整个模块。

### 4.3 指导方案

1. 分拆接口。

   设计接口有一个技巧：让客户（调用方）来驱动协议设计。

2. 写小接口、小类。

### 4.4 总结

- “I：接口隔离原则” 认为客户不应该依赖任何它不使用的方法
- 设计接口就是设计抽象
- 违反接口隔离原则也可能会导致违反单一职责与里式替换原则
- 写更小的类、写更小的接口在大多数情况下是个好主意

## 五、 D：依赖倒置原则（Dependency Inversion Principle）

> “高层模块不应该依赖于低层模块，二者都应该依赖于抽象。”

### 5.1 基本内容

软件是由一个个模块组合而成的。当你跟别人说：“我在写一个很复杂的软件”，其实你并不是直接在写那个软件，你只是在编写它的一个个模块，最后把它们放在一起组合成你的软件。

有了模块，模块间自然就有了依赖关系。比如，你的个人博客可能依赖着 Flask 框架，而 Flask 又依赖了 Werkzeug，Werkzeug 又由更多个低层模块组成。

依赖倒置原则（Dependency Inversion Principle）就是一条和有关依赖的原则。

这个原则看上去有点反直觉。毕竟，在我们的第一堂编程课上，老师就是这么教我们写代码的：“高层模块要依赖低层模块，hello world 程序依赖 printf()。”那为什么这条原则又说不要这样做呢？而依赖倒置原则里的“倒置”又是指什么？

### 5.2 常见错误

1. 代码依赖于模块。

   测试代码时，因为代码中依赖的库需要访问外网，而电脑无法访问外网，从而导致了报错。

   对于以上问题的一个解决方案是：使用 mock。

   mock 是 unittest 里的一个模块，同时也是一类测试手法的统称。假如你需要测试的模块里有一部分依赖很难被满足（比如代码需要访问一整套 Kubernetes 集群），或者你想在测试时故意替换掉某些依赖，那么 mock 就能派上用场。

   不过虽然 mock 用起来很方便，但它不是解决我们问题的最佳做法。因为 mock 在带来方便的同时，也让测试代码变得更复杂和难以理解。而且，给测试加上 mock 也仅仅只是让我的单元测试能够跑起来，糟糕设计仍然是糟糕设计。它无法体现出单元测试最重要的价值之一：**“通过编写测试反向推动设计改进”。**

   所以，我们需要做的是改进依赖关系，而不只是简单的在测试时把依赖模块替换掉。

### 5.3 指导方案

1. 创建抽象（例如：Java 和 Go 中的接口），同时让高层模块和底层模块依赖于这个抽象。

   创建抽象的第一步（可能也是最重要的一步），就是确定这个抽象层的职责。确定了抽象层的职责和名字后，我们继续定义 Interface（接口）。接着，我们定义几个依赖这个抽象类的实体。

   此时，高层模块不再依赖低层模块，二者同时依赖于抽象概念，低层模块的依赖箭头和之前相比倒过来了。所以我们称其为 依赖倒置。

### 5.4 思考

1. 一定要使用抽象类 abc 吗？

   是不是只有定义了抽象类才能实现依赖倒置？只有用了抽象类才算是依赖倒置呢？

   **答案是否定的。**如果你愿意，你可以把代码里的抽象类 HNWebPage 以及所有的相关引用都删掉，你会发现没有它们代码仍然可以正常运行。

   这是因为 Python 是一门“鸭子类型”语言。这意味着只要 RemoteHNWebPage 和 LocalHNWebPage 类型保持着统一的接口协议（提供 .get_text() 公开方法），并且它们的 **协议符合我们定义的抽象**。那么那个中间层就存在，依赖倒置就是成立的。至于这份 **协议** 是通过抽象类还是普通父类（甚至可以是普通函数）定义的，就没那么重要了。

   所以，虽然在某些编程语言中，实现依赖倒置必须得定义新的接口类型，但在 Python 里，依赖倒置并不是抽象类 abc 的特权。

2. 抽象一定是好东西吗？

   前面的所有内容，都是在说新增一个抽象层，然后让依赖关系倒过来的种种好处。所以，多抽象的代码一定就是好的吗？缺少抽象的代码就一定不够灵活？

   和所有这类问题的标准回答一样，答案是：**视情况而定。**

   当你习惯了依赖倒置原则以后，你会发现 抽象（Abstract） 其实是一种思维方式，而不仅仅是一种编程手法。如果你愿意，你可以在代码里的所有地方都 **硬挤** 一层额外抽象出来：

   - 比如代码里的字符串字面量也是具体实现，我是不是得定义一个 "StringLike" 类型把它抽象进去？
   - ……

   事实上，抽象的好处显而易见：**它解耦了高层模块和低层模块间的依赖关系，让代码变得更灵活。** 但抽象同时也带来了额外的编码与理解成本。所以，了解何时 **不** 抽象与何时抽象同样重要。**只有对代码中那些现在或未来会发生变化的东西进行抽象，才能获得最大的收益。**

### 5.5 总结

- “D：依赖倒置原则” 认为高层模块和低层模块都应该依赖于抽象
- 依赖抽象，意味着我们可以完全修改低层实现，而不影响高层代码
- 在 Python 中你可以使用 abc 模块来定义抽象类
- 除 abc 外，你也可以使用其他技术来完成依赖倒置

## 参考资料

- [想写好面向对象的代码，这几篇一定要看（上）](https://mp.weixin.qq.com/s?__biz=Mzg2OTg3MTU2OQ==&mid=2247505740&idx=1&sn=5366b25e27ef751973f1dbd65003ca5a&source=41#wechat_redirect)
- [想写好面向对象的代码，这几篇一定要看（中）](https://mp.weixin.qq.com/s?__biz=Mzg2OTg3MTU2OQ==&mid=2247505742&idx=1&sn=41c53c80ff25434e28550753ed678d32&source=41#wechat_redirect)
- [想写好面向对象的代码，这几篇一定要看（下）](https://mp.weixin.qq.com/s?__biz=Mzg2OTg3MTU2OQ==&mid=2247505743&idx=1&sn=6e78bca6f26aa0971caf43d319e2b7a5&source=41#wechat_redirect)