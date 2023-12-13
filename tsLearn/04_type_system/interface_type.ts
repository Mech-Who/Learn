//#region 接口类型
/**
 * 类似于对象类型字面量，接口类型也能够表示任意的对象类型。
 * 不同的是，接口类型能够给对象类型命名以及定义类型参数。
 * 接口类型无法表示原始类型，如boolean类型等。
 * 接口声明只存在于编译阶段，在编译后生成的JavaScript代码中不包含任何接口代码。
 */

//#region 接口声明
/**
 * 通过接口声明能够定义一个接口类型。接口声明的基础语法如下所示：
 *
 * interface InterfaceName{
 * TypeMember;
 * TypeMember;
 * ...
 *
 * }
 *
 * 在该语法中，interface是关键字，InterfaceName表示接口名，
 * 它必须是合法的标识符，TypeMember表示接口的类型成员，
 * 所有类型成员都置于一对大括号“{}”之内。按照惯例，接口名的首字母需要大写。
 * 因为接口定义了一种类型，而类型名的首字母通常需要大写。
 * 示例如下：
 */
interface ShapeP {}

/**
 * 在接口名之后，由一对大括号“{}”包围起来的是接口类型中的类型成员。
 * 这部分的语法与5.11.3节中介绍的对象类型字面量的语法完全相同。
 * 从语法的角度来看，接口声明就是在对象类型字面量之前添加了interface关键字和接口名。
 * 因此，在5.11.3节中介绍的语法规则同样适用于接口声明。
 * 例如，类型成员间的分隔符和类型成员的尾后分号、逗号。
 *
 * 同样地，接口类型的类型成员也分为以下五类：
 *
 * 1. 属性签名
 * 2. 调用签名
 * 3. 构造签名
 * 4. 方法签名
 * 5. 索引签名
 *
 * 在5.11.3节中，我们详细介绍了属性签名。
 * 在5.12节中，我们详细介绍了调用签名和构造签名。
 * 这三种类型成员同样适用于接口类型。
 * 下面我们将简要回顾一下属性签名、调用签名和构造签名的语法，
 * 并着重介绍索引签名和方法签名。
 */
//#endregion

//#region 属性签名
/**
 * 属性签名声明了对象类型中属性成员的名称和类型。
 * 属性签名的语法如下所示：
 *
 * PropertyName: Type;
 *
 * 在该语法中，PropertyName表示对象属性名，
 * 可以为标识符、字符串、数字和可计算属性名；
 * Type表示该属性的类型。示例如下：
 */
interface Pointt {
  x: number;
  y: number;
}

/**
 * 关于属性签名的详细介绍请参考5.11.3节。
 */
//#endregion

//#region 调用签名
/**
 * 调用签名定义了该对象类型表示的函数在调用时的类型参数、
 * 参数列表以及返回值类型。调用签名的语法如下所示：
 *
 * (ParameterList): Type
 *
 * 在该语法中，ParameterList表示函数形式参数列表类型；
 * Type表示函数返回值类型，两者都是可选的。示例如下：
 */
interface ErrorConstructo {
  (message?: string): Error;
}
// 关于调用签名的详细介绍请参考5.12.8节。
//#endregion

//#region 构造签名
/**
 * 构造签名定义了该对象类型表示的构造函数在使用new运算符调用时的参数列表以及返回值类型。
 * 构造签名的语法如下所示：
 *
 * new (ParameterList): Type
 *
 * 在该语法中，new是运算符关键字；
 * ParameterList表示构造函数形式参数列表类型；
 * Type表示构造函数返回值类型，两者都是可选的。
 * 示例如下：
 */
interface ErrorConstuctor {
  new (message?: string): Error;
}
//关于调用签名的详细介绍请参考5.12.10节。
//#endregion

//#region 方法签名
/**
 * 方法签名是声明函数类型的属性成员的简写。方法签名的语法如下所示：
 *
 * PropertyName(ParameterList): Type
 *
 * 在该语法中，PropertyName表示对象属性名，可以为标识符、字符串、
 * 数字和可计算属性名；ParameterList表示可选的方法形式参数列表类型；
 * Type表示可选的方法返回值类型。从语法的角度来看，
 * 方法签名是在调用签名之前添加一个属性名作为方法名。
 * 下例中定义了Document接口，它包含一个方法签名类型成员。
 * 该方法的方法名为getElementById，
 * 它接受一个string类型的参数并返回“HTMLElement | null”类型的值。
 * 示例如下：
 */
interface Document {
  getElementBtId(elementId: string): HTMLElement | null;
}
/**
 * 之所以说方法签名是声明函数类型的属性成员的简写，
 * 是因为方法签名可以改写为具有同等效果但语法稍显复杂的属性签名。
 * 我们知道方法签名的语法如下所示：
 *
 * PropertyName(ParameterList): Type
 *
 * 将上述方法签名改写为具有同等效果的属性签名，如下所示：
 *
 * PropertyName: { (ParameterList): Type }
 *
 * 在改写后的语法中，属性名保持不变并使用对象类型字面量和调用签名来表示函数类型。
 * 由于该对象类型字面量中仅包含一个调用签名，因此也可以使用函数类型字面量来代替对象类型字面量。
 * 示例如下：
 *
 * PropertyName: (ParameterList) => Type
 * 下面我们通过一个真实的例子来演示这三种可以互换的接口定义方式：
 */
interface A {
  f(x: boolean): string; // 方法签名
}

interface B {
  f: { (x: boolean): string }; // 属性签名和对象类型字面量
}

interface C {
  f: (x: boolean) => string; // 属性签名和函数类型字面量
}

/**
 * 此例中我们定义了三个接口A、B和C，它们都表示同一种类型，
 * 即定义了方法f的对象类型，方法f接受一个boolean类型的参数并返回string类型的值。
 * 方法签名中的属性名可以为可计算属性名，这一点与属性签名中属性名的规则是相同的。
 * 关于可计算属性名规则的详细介绍请参考5.11.3节。示例如下：
 */
const f400 = "f400";

interface A {
  [f400](x: boolean): string;
}

/**
 * 若接口中包含多个名字相同但参数列表不同的方法签名成员，
 * 则表示该方法是重载方法。例如，下例中的方法f是一个重载方法，
 * 它具有三种调用签名：
 */
interface A {
  f401(): number;
  f401(x: boolean): boolean;
  f401(x: string, y: string): string;
}
//#endregion

//#region 索引签名
/**
 * JavaScript支持使用索引去访问对象的属性，即通过方括号“[]”语法去访问对象属性。
 * 一个典型的例子是数组对象，我们既可以使用数字索引去访问数组元素，
 * 也可以使用字符串索引去访问数组对象上的属性和方法。示例如下：
 */
const colors400 = ["red", "green", "blue"];
// 访问数组中的第一个元素
const red400 = colors400[0];
// 访问数组对象的length属性
const len400 = colors400["length"];

/**
 * 接口中的索引签名能够描述使用索引访问的对象属性的类型。索引签名只有以下两种：
 *
 * 1. 字符串索引签名。
 * 2. 数值索引签名。
 */

//#region 字符串索引签名
/**
 * 字符串索引签名的语法如下所示：
 *
 * [IndexName: string]: Type
 *
 * 在该语法中，IndexName表示索引名，它可以为任意合法的标识符。
 * 索引名只起到占位的作用，它不代表真实的对象属性名；在字符串索引签名中，
 * 索引名的类型必须为string类型；Type表示索引值的类型，它可以为任意类型。
 * 示例如下：
 */
interface A {
  [prop: string]: number;
}

/**
 * 一个接口中最多只能定义一个字符串索引签名。字符串索引签名会约束该对象类型中所有属性的类型。
 * 例如，下例中的字符串索引签名定义了索引值的类型为number类型。
 * 那么，该接口中所有属性的类型必须能够赋值给number类型。示例如下：
 */
interface A2 {
  [prop: string]: number;

  a: number;
  b: 0;
  c: 1 | 2;
}

/**
 * 此例中，属性a、b和c的类型都能够赋值给字符串索引签名中定义的number类型，因此不会产生错误。
 * 接下来，我们再来看一个错误的例子：
 */
interface B {
  [prop: string]: number;

  // a: boolean;      // 编译错误
  // b: () => number; // 编译错误
  // c(): number;     // 编译错误
}

/**
 * 此例中，字符串索引签名中定义的索引值类型依旧为number类型。
 * 属性a的类型为boolean类型，它不能赋值给number类型，因此产生编译错误。
 * 属性b和方法c的类型均为函数类型，不能赋值给number类型，因此也会产生编译错误
 */
//#endregion

//#region 数值索引签名
/**
 * 数值索引签名的语法如下所示：
 *
 * [IndexName: number]: Type
 *
 * 在该语法中，IndexName表示索引名，它可以为任意合法的标识符。
 * 索引名只起到占位的作用，它不代表真实的对象属性名；在数值索引签名中，
 * 索引名的类型必须为number类型；Type表示索引值的类型，它可以为任意类型。
 * 示例如下：
 */
interface A3 {
  [prop: number]: string;
}

/**
 * 一个接口中最多只能定义一个数值索引签名。数值索引签名约束了数值属性名对应的属性值的类型。
 * 示例如下：
 */
interface A4 {
  [prop: number]: string;
}
const obj400: A4 = ["a", "b", "c"];
obj400[0]; // string

/**
 * 若接口中同时存在字符串索引签名和数值索引签名，
 * 那么数值索引签名的类型必须能够赋值给字符串索引签名的类型。
 * 因为在JavaScript中，对象的属性名只能为字符串（或Symbol）。
 * 虽然JavaScript也允许使用数字等其他值作为对象的索引，但最终它们都会被转换为字符串类型。
 * 因此，数值索引签名能够表示的属性集合是字符串索引签名能够表示的属性集合的子集。
 * 下例中，字符串索引签名的类型为number类型，数值索引签名的类型为数字字面量联合类型“0 | 1”。
 * 由于“0 | 1”类型能够赋值给number类型，因此该接口定义是正确的。
 * 示例如下：
 */
interface A5 {
  [prop: string]: number;
  [prop: number]: 0 | 1;
}

/**
 * 但如果我们交换字符串索引签名和数值索引签名的类型，则会产生编译错误。
 * 示例如下：
 */
interface A6 {
    [prop: string]: 0 | 1;
    // [prop: number]: number; // 编译错误
}
//#endregion

//#endregion

//#region 可选属性与方法
/**
 * 在默认情况下，接口中属性签名和方法签名定义的对象属性都是必选的。
 * 在给接口类型赋值时，如果未指定必选属性则会产生编译错误。
 * 示例如下：
 */
interface F00500 {
    x: string;
    y(): number;
}

//#endregion

/**
 * 8 底层细节指的是什么？
 * 29 对三维模型的预训练，有相关论文推荐嘛？
 * 
 * 引用
 */

//#endregion
