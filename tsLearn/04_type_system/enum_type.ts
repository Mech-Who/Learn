//#region 枚举类型

/**
 * 枚举类型由零个或多个枚举成员构成，每个枚举成员都是一个命名的常量。
 *
 * 在TypeScript中，枚举类型是一种原始类型，它通过enum关键字来定义。
 * 例如，我们可以使用枚举类型来表示一年四季，
 * 示例如下：
 */
enum Season {
    Spring,
    Summer,
    Fall,
    Winter,
  }
  
  /**
   * 按照枚举成员的类型可以将枚举类型划分为以下三类：
   * 1. 数值型枚举
   * 2. 字符串枚举
   * 3. 异构型枚举
   */
  
  //#region 数值型枚举
  /**
   * 数值型枚举是最常用的枚举类型，是number类型的子类型，
   * 它由一组命名的数值常量构成。
   * 定义数值型枚举的方法如下所示：
   */
  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }
  
  const direction: Direction = Direction.Up;
  
  /**
   * 此例中，我们使用enum关键字定义了枚举类型Direction，
   * 它包含了四个枚举成员Up、Down、Left和Right。
   * 在使用枚举成员时，可以像访问对象属性一样访问枚举成员。
   */
  
  /**
   * 每个数值型枚举成员都表示一个具体的数字。
   * 如果在定义枚举时没有设置枚举成员的值，那么TypeScript将自动计算枚举成员的值。
   * 根据TypeScript语言的规则，第一个枚举成员的值为0，
   * 其后每个枚举成员的值等于前一个枚举成员的值加1。
   * 因此，Direction枚举中Up的值为0、Down的值为1，以此类推。
   * 示例如下：
   */
  enum Direction2 {
    Up, // 0
    Down, // 1
    Left, // 2
    Right, // 3
  }
  
  /**
   * 在定义数值型枚举时，可以为一个或多个枚举成员设置初始值。
   * 对于未指定初始值的枚举成员，其值为前一个枚举成员的值加1。
   * 在5.4.5节中将详细介绍枚举成员的计算规则。
   * 示例如下：
   */
  enum Direction3 {
    Up = 1, // 1
    Down, // 2
    Left = 10, // 10
    Right, // 11
  }
  
  /**
   * 前文提到，数值型枚举是number类型的子类型，因此允许将数值型枚举类型赋值给number类型。
   * 例如，下例中常量direction为number类型，可以使用数值型枚举Direction来初始化direction常量。
   * 示例如下：
   */
  enum Direction4 {
    Up,
    Down,
    Left,
    Right,
  }
  const direction2: number = Direction4.Up;
  
  /**
   * 需要注意的是，number类型也能够赋值给枚举类型，
   * 即使number类型的值不在枚举成员值的列表中也不会产生错误。
   * 示例如下：
   */
  enum Direction5 {
    Up,
    Down,
    Left,
    Right,
  }
  const d1: Direction5 = 0; // Direction.Up
  // TODO:?????报错了！
  // const d2: Direction5 = 10; // 不会产生错误
  //#endregion
  
  //#region 字符串枚举
  /**
   * 字符串枚举与数值型枚举相似。在字符串枚举中，枚举成员的值为字符串。
   * 字符串枚举成员必须使用字符串字面量或另一个字符串枚举成员来初始化。
   * 字符串枚举成员没有自增长的行为。
   * 示例如下：
   */
  enum Direction6 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  
    U = Up,
    D = Down,
    L = Left,
    R = Right,
  }
  
  /**
   * 字符串枚举是string类型的子类型，因此允许将字符串枚举类型赋值给string类型。
   * 例如，下例中常量direction为string类型，
   * 可以使用字符串枚举Direction来初始化direction常量：
   */
  enum Direction7 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }
  const direction3: string = Direction7.Up;
  
  /**
   * 但是反过来，不允许将string类型赋值给字符串枚举类型，这一点与数值型枚举是不同的。
   * 例如，下例中将字符串“'UP'”赋值给字符串枚举类型的常量direction将产生编译错误：
   */
  enum Direction8 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }
  // const direction4: Direction8 = "UP";
  // 编译错误！类型 'UP' 不能赋值给类型 'Direction'
  //#endregion
  
  //#region 异构型枚举
  /**
   * TypeScript允许在一个枚举中同时定义数值型枚举成员和字符串枚举成员，
   * 我们将这种类型的枚举称作异构型枚举。异构型枚举在实际代码中很少被使用，
   * 虽然在语法上允许定义异构型枚举，但是不推荐在代码中使用异构型枚举。
   * 我们可以尝试使用对象来代替异构型枚举。
   */
  //下例中定义了一个简单的异构型枚举：
  enum Color {
    Black = 0,
    White = "White",
  }
  
  /**
   * 在定义异构型枚举时，不允许使用计算的值作为枚举成员的初始值。
   * 示例如下：
   */
  enum Color2 {
    Black = 0 + 0,
    // 编译错误！在带有字符串成员的枚举中不允许使用计算值
    White = "White",
  }
  
  /**
   * 在异构型枚举中，必须为紧跟在字符串枚举成员之后的数值型枚举成员指定一个初始值。
   * 下例中，ColorA枚举的定义是正确的，但是ColorB枚举的定义是错误的，
   * 必须为数值型枚举成员Black指定一个初始值。
   * 示例如下：
   */
  enum ColorA {
    Black,
    White = "White",
  }
  /*
  enum ColorB {
    White = "White",
    Black,
    // 编译错误！枚举成员必须有一个初始值
  }
  */
  //#endregion
  
  //#region 枚举成员映射
  /**
   * 不论是哪种类型的枚举，都可以通过枚举成员名去访问枚举成员值。
   * 下例中，通过枚举名Bool和枚举成员名False与True能够访问枚举成员的值：
   */
  enum Bool {
    False = 0,
    True = 1,
  }
  Bool.False; // 0
  Bool.True; // 1
  
  /**
   * 对于数值型枚举，不但可以通过枚举成员名来获取枚举成员值，
   * 也可以反过来通过枚举成员值去获取枚举成员名。
   * 下例中，通过枚举成员值“Bool.False”能够获取其对应的枚举成员名，
   * 即字符串“'False'”：
   */
  enum Bool2 {
    False = 0,
    True = 1,
  }
  Bool[Bool.False]; // 'False'
  Bool[Bool.True]; // 'True'
  // 对于字符串枚举和异构型枚举，则不能够通过枚举成员值去获取枚举成员名。
  //#endregion
  
  //#region 常量枚举成员与计算枚举成员
  
  /**
   * 每个枚举成员都有一个值，根据枚举成员值的定义可以将枚举成员划分为以下两类：
   * 1. 常量枚举成员
   * 2. 计算枚举变量
   */
  
  // 常量枚举成员
  /**
   * 若枚举类型的第一个枚举成员没有定义初始值，
   * 那么该枚举成员是常量枚举成员并且初始值为0。
   * 示例如下：
   */
  enum Foo2 {
    A, // 0
  }
  /**
   * 此例中，枚举成员A是常量枚举成员，并且“Foo.A”的值为0。
   *
   * 若枚举成员没有定义初始值并且与之紧邻的前一个枚举成员值是数值型常量，
   * 那么该枚举成员是常量枚举成员并且初始值为紧邻的前一个枚举成员值加1。
   * 如果紧邻的前一个枚举成员的值不是数值型常量，那么将产生错误。
   * 示例如下：
   */
  enum Foo3 {
    A, // 0
    B, // 1
  }
  
  enum Bar3 {
    C = "C",
    //D,    // 编译错误
  }
  
  /**
   * 此例中，枚举成员“Foo.A”和“Foo.B”都是常量枚举成员。
   * 枚举成员“Bar.D”的定义将产生编译错误，
   * 因为它没有指定初始值并且前一个枚举成员“Bar.C”的值不是数值。
   */
  
  /**
   * 若枚举成员的初始值是常量枚举表达式，那么该枚举成员是常量枚举成员。
   * 常量枚举表达式是TypeScript表达式的子集，它能够在编译阶段被求值。
   * 常量枚举表达式的具体规则如下：
   *
   * 1. 常量枚举表达式可以是数字字面量、字符串字面量和不包含替换值的模板字面量。
   * 2. 常量枚举表达式可以是对前面定义的常量枚举成员的引用。
   * 3. 常量枚举表达式可以是用分组运算符包围起来的常量枚举表达式。
   * 4. 常量枚举表达式中可以使用一元运算符“+”“-”“~”，操作数必须为常量枚举表达式。
   * 5. 常量枚举表达式中可以使用二元运算符“+”“-”“*”“**”“/”“%”“<<”“>>”“>>>”“&”“|”“^”，两个操作数必须为常量枚举表达式。
   *
   * 例如，下例中的枚举成员均为常量枚举成员：
   */
  enum Foo4 {
    A = 0, // 数字字面量
    B = "B", // 字符串字面量
    C = `C`, // 无替换值的模板字面量
    D = A, // 引用前面定义的常量枚举成员
  }
  
  enum Bar4 {
    A = -1, // 一元运算符
    B = 1 + 2, // 二元运算符
    C = (4 / 2) * 3, // 分组运算符（小括号）
  }
  
  /**
   * 字面量枚举成员是常量枚举成员的子集。
   * 字面量枚举成员是指满足下列条件之一的枚举成员，
   * 具体条件如下：
   *
   * 1. 枚举成员没有定义初始值。
   * 2. 枚举成员的初始值为数字字面量、字符串字面量和不包含替换值的模板字面量。
   * 3. 枚举成员的初始值为对其他字面量枚举成员的引用。
   *
   * 下例中，Foo枚举的所有成员都是字面量枚举成员，同时它们也都是常量枚举成员：
   */
  enum Foo5 {
    A,
    B = 1,
    C = -3,
    D = "foo",
    E = `bar`,
    F = A,
  }
  
  // 计算枚举变量
  /**
   * 除常量枚举成员之外的其他枚举成员都属于计算枚举成员。
   * 下例中，枚举成员“Foo.A”和“Foo.B”均为计算枚举成员：
   */
  enum Foo6 {
    A = "A".length,
    B = Math.pow(2, 3),
  }
  
  // 使用示例
  /**
   * 枚举表示一组有限元素的集合，并通过枚举成员名来引用集合中的元素。
   * 有时候，程序中并不关注枚举成员值。
   * 在这种情况下，让TypeScript去自动计算枚举成员值是很方便的。
   * 示例如下：
   */
  enum Direction9 {
    Up,
    Down,
    Left,
    Right,
  }
  
  function move(direction: Direction9) {
    switch (direction) {
      case Direction9.Up:
        console.log("Up");
        break;
      case Direction9.Down:
        console.log("Down");
        break;
      case Direction9.Left:
        console.log("Left");
        break;
      case Direction9.Right:
        console.log("Right");
        break;
    }
  }
  
  move(Direction9.Up);
  move(Direction9.Down);
  
  /**
   * 程序不依赖枚举成员值时，能够降低代码耦合度，使程序易于扩展。
   * 例如，我们想给Direction枚举添加一个名为None的枚举成员来表示未知方向。
   * 按照惯例，None应作为第一个枚举成员。
   * 因此，我们可以将代码修改如下：
   */
  enum Direction10 {
    None,
    Up,
    Down,
    Left,
    Right,
  }
  
  function move2(direction: Direction10) {
    switch (direction) {
      case Direction10.None:
        console.log("None");
        break;
      case Direction10.Up:
        console.log("Up");
        break;
      case Direction10.Down:
        console.log("Down");
        break;
      case Direction10.Left:
        console.log("Left");
        break;
      case Direction10.Right:
        console.log("Right");
        break;
    }
  }
  
  move2(Direction10.Up); // 'Up'
  move2(Direction10.Down); // 'Down'
  move2(Direction10.None); // 'None'
  
  /**
   * 此例中，枚举成员Up、Down、Left和Right的值已经发生了改变，Up的值由0变为1，以此类推。
   * 由于move()函数的行为不直接依赖枚举成员的值，因此本次代码修改对move()函数的已有功能不产生任何影响。
   * 但如果程序中依赖了枚举成员的具体值，那么这次代码修改就会破坏现有的代码，如下所示：
   */
  enum Direction11 {
    None,
    Up,
    Down,
    Left,
    Right,
  }
  
  function move3(direction: Direction11) {
    switch (direction) {
      // 不会报错，但是逻辑错误，Direction.Up的值已经不是数字0
      case 0:
        console.log("Up");
        break;
      // 忽略其他代码
    }
  }
  //#endregion
  
  //#region 联合枚举类型
  /**
   * 当枚举类型中的所有成员都是字面量枚举成员时，该枚举类型成了联合枚举类型。
   */
  
  // 联合枚举成员类型
  /**
   * 联合枚举类型中的枚举成员除了能够表示一个常量值外，还能够表示一种类型，即联合枚举成员类型。
   *
   * 下例中，Direction枚举是联合枚举类型，
   * Direction枚举成员Up、Down、Left和Right既表示数值常量，
   * 也表示联合枚举成员类型：
   */
  enum Direction12 {
    Up,
    Down,
    Left,
    Right,
  }
  
  const up: Direction12.Up = Direction12.Up;
  // 此例第8行，第一个“Direction.Up”表示联合枚举成员类型，
  // 第二个“Direction.Up”则表示数值常量0。
  
  /**
   * 联合枚举成员类型是联合枚举类型的子类型，
   * 因此可以将联合枚举成员类型赋值给联合枚举类型。
   * 示例如下：
   */
  enum Direction13 {
    Up,
    Down,
    Left,
    Right,
  }
  
  const up2: Direction13.Up = Direction13.Up;
  
  const direction4: Direction13 = up2;
  //此例中，常量up的类型是联合枚举成员类型“Direction.Up”，
  //常量direction的类型是联合枚举类型Direction。
  //由于“Direction.Up”类型是Direction类型的子类型，
  //因此可以将常量up赋值给常量direction。
  
  //联合枚举类型
  /**
   * 联合枚举类型是由所有联合枚举成员类型构成的联合类型。
   * 示例如下：
   */
  enum Direction14 {
    Up,
    Down,
    Left,
    Right,
  }
  
  type UnionDirectionType =
    | Direction.Up
    | Direction.Down
    | Direction.Left
    | Direction.Right;
  //此例中，Direction枚举是联合枚举类型，它等同于联合类型UnionDirectionType，
  //其中“|”符号是定义联合类型的语法。
  //关于联合类型的详细介绍请参考6.3节。
  
  /**
   * 由于联合枚举类型是由固定数量的联合枚举成员类型构成的联合类型，
   * 因此编译器能够利用该性质对代码进行类型检查。
   * 示例如下：
   */
  enum Direction15 {
    Up,
    Down,
    Left,
    Right,
  }
  
  function f(direction: Direction15) {
    if (direction === Direction15.Up) {
      // Direction15.Up
    } else if (direction === Direction15.Down) {
      // Direction15.Down
    } else if (direction === Direction15.Left) {
      // Direction15.Left
    } else {
      // 能够分析出此处的direction为Direction15.Right
      direction;
    }
  }
  // 此例中，编译器能够分析出Direction联合枚举类型只包含四种可能的联合枚举成员类型。
  // 在“if-else”语句中，编译器能够根据控制流分析出最后的else分支中direction的类型为
  // “Direction.Right”。
  
  /**
   * 下面再来看另外一个例子。Foo联合枚举类型由两个联合枚举成员类型“Foo.A”和“Foo.B”构成。
   * 编译器能够检查出在第7行if条件判断语句中的条件表达式结果永远为true，因此将产生编译错误。
   * 示例如下：
   */
  enum Foo7 {
    A = "A",
    B = "B",
  }
  
  function bar7(foo: Foo7) {
    // if (foo !== Foo7.A || foo !== Foo7.B) {
    //   // 编译错误，该条件永远为'true'
    // }
  }
  
  /**
   * 让我们继续深入联合枚举类型。
   * 下例中，由于Foo联合枚举类型等同于联合类型“Foo.A | Foo.B”，
   * 因此它是联合类型“'A' | 'B'”的子类型：
   */
  enum Foo8 {
    A = "A",
    B = "B",
  }
  
  enum Bar8 {
    A = "A",
  }
  
  enum Baz8 {
    B = "B",
    C = "C",
  }
  
  function f1(x: "A" | "B") {
    console.log(x);
  }
  
  function f2(foo: Foo8, bar: Bar8, baz: Baz8) {
    // f1(foo);
    // f1(bar);
    // f1(baz);
    // // 错误：类型'Baz8'不能赋值给参数类型'A' | 'B'
  }
  //此例第15行，f1函数接受“'A' | 'B'”联合类型的参数x。
  //第20行，允许使用Foo枚举类型的参数foo调用函数f1，
  //因为Foo枚举类型是“'A' | 'B'”类型的子类型。
  //第21行，允许使用Bar枚举类型的参数bar调用函数f1，
  //因为Bar枚举类型是'A'类型的子类型，显然也是“'A' | 'B'”类型的子类型。
  //第23行，不允许使用Baz枚举类型的参数baz调用函数f1，
  //因为Baz枚举类型是“'B' | 'C'”类型的子类型，
  //显然与“'A' | 'B'”类型不兼容，所以会产生错误。
  //关于子类型兼容性的详细介绍请参考7.1节。
  //#endregion
  
  //#region const枚举类型
  /**
   * 枚举类型是TypeScript对JavaScript的扩展，JavaScript语言本身并不支持枚举类型。
   * 在编译时，TypeScript编译器会将枚举类型编译为JavaScript对象。
   * 例如，我们定义如下的枚举：
   */
  enum Direction16 {
    Up,
    Down,
    Left,
    Right,
  }
  
  const d: Direction = Direction.Up;
  /**
   * 此例中的代码编译后生成的JavaScript代码如下所示，
   * 为了支持枚举成员名与枚举成员值之间的正、反向映射关系，
   * TypeScript还生成了一些额外的代码：
   */
  /*
  01 "use strict";
  02 var Direction;
  03 (function (Direction) {
    04     Direction[Direction["Up"] = 0] = "Up";
    05     Direction[Direction["Down"] = 1] = "Down";
    06     Direction[Direction["Left"] = 2] = "Left";
    07     Direction[Direction["Right"] = 3] = "Right";
    08 })(Direction || (Direction = {}));
    09 
    10 const d = Direction.Up;
  */
  /**
   * 有时候我们不会使用枚举成员值到枚举成员名的反向映射，
   * 因此没有必要生成额外的反向映射代码，
   * 只需要生成如下代码就能够满足需求：
   */
  /*
  01 "use strict";
  02 var Direction;
  03 (function (Direction) {
  04     Direction["Up"] = 0;
  05     Direction["Down"] = 1
  06     Direction["Left"] = 2
  07     Direction["Right"] = 3
  08 })(Direction || (Direction = {}));
  09 
  10 const d = Direction.Up;
  */
  /**
   * 更进一步讲，如果我们只关注第10行枚举类型的使用方式就会发现，
   * 完全不需要生成与Direction对象相关的代码，只需要将“Direction.Up”替换为它所表示的常量0即可。
   * 经过此番删减后的代码量将大幅减少，并且不会改变程序的运行结果，
   * 如下所示：
   */
  /*
  01 "use strict";
  02 const d = 0;
  */
  
  /**
   * const枚举类型具有相似的效果。const枚举类型将在编译阶段被完全删除，
   * 并且在使用了const枚举类型的地方会直接将const枚举成员的值内联到代码中。
   *
   * const枚举类型使用“const enum”关键字定义，示例如下：
   */
  const enum Directions17 {
    Up,
    Down,
    Left,
    Right,
  }
  
  const directions = [
    Directions17.Up,
    Directions17.Down,
    Directions17.Left,
    Directions17.Right,
  ];
  //此例中的代码经过TypeScript编译器编译后生成的JavaScript代码如下所示：
  /*
  01 "use strict";02 const directions = [
    03     0 // Up
    04     1 // Down
    05     2 // Left
    06     3 // Right 
    07 ];
  */
  /**
   * 我们能够注意到，为了便于代码调试和保持代码的可读性，
   * TypeScript编译器在内联了const枚举成员的位置还额外添加了注释，
   * 注释的内容为枚举成员的名字。
   */
  //#endregion
  
  //#endregion
  