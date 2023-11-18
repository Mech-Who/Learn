//#region 数据类型

/**
 * ECMAScript 2015规范定义：
 *
 * 原始数据类型（内置，基础数据类型）：
 * Undefined
 * Null
 * Boolean
 * String
 * Symbol
 * Number
 *
 * 非原始数据类型：
 * Object
 */

//#region Undefined
/**
 * 类型只包含一个值，即undefined。
 * 在变量未被初始化时，它的值为unde-fined。
 */
//#endregion

//#region Null
/**
 * Null类型也只包含一个值，即null。
 * 我们通常使用null值来表示未初始化的对象。
 * 此外，null值也常被用在JSON文件中，表示一个值不存在。
 */
//#endregion

//#region Boolean
/**
 * Boolean类型包含两个逻辑值，分别是true和false。
 */
//#endregion

//#region String
/**
 * String类型表示文本字符串，它由0个或多个字符构成。
 *
 * JavaScript使用UTF-16编码来表示一个字符。
 * UTF-16编码以两个字节作为一个编码单元，
 * 每个字符使用一个编码单元或者两个编码单元来表示。
 * 在底层存储中，字符串是由零个或多个16位无符号整数构成的有序序列。
 *
 * 在获取字符串长度时，返回的是字符串中包含的编码单元的数量。
 * 对于字符串'ab'而言，返回的长度是2。
 * 因为字符'a'和字符'b'均由一个编码单元表示，总和为2。
 * 前面介绍过，在UTF-16编码中，
 * 一个字符可能使用一个编码单元或者两个编码单元来表示。
 * 若字符串中包含需要使用两个编码单元表示的字符，
 * 那么获取字符串长度的结果可能不符合预期。
 * 例如我们在获取字符“❤”的长度时得到的结果为2，
 *
 * 此外，ECMAScript 2015规定了字符串允许的最大长度为253 - 1，
 * 该数值也是JavaScript所能安全表示的最大整数。
 */
//#endregion

//#region Number

/**
 * Number类型表示一个数字。
 *
 * JavaScript不详细区分整数类型、浮点数类型以及带符号的数字类型等。
 * JavaScript使用双精度64位浮点数格式（IEEE 754）来表示数字，
 * 因此所有数字本质上都是浮点数。
 * 在该格式中，符号部分占用1位（bit），指数部分占用11位，
 * 小数部分占用52位，一共占用64位。
 */

//#endregion

//#region Symbol

/**
 * Symbol是ECMAScript 2015新引入的原始类型。
 * Symbol值有一个重要特征，
 * 那就是每一个Symbol值都是唯一的且不可改变的。
 * Symbol值的主要应用场景是作为对象的属性名。
 *
 * Symbol的设计初衷是用来实现对象的私有属性，
 * 但实际上Symbol并不能实现真正意义上的私有属性。
 * JavaScript还是提供了一些方法允许程序去访问Symbol属性。
 * 虽然Symbol无法实现绝对的私有属性，
 * 但是它确实有助于缓解属性命名冲突问题。
 */

//#region Symbol()

/**
 * JavaScript提供了一个全局的“Symbol()”函数来创建Symbol类型的值。
 * 我们可以将“Symbol()”函数想象成GUID（全局唯一标识符）的生成器，
 * 每次调用“Symbol()”函数都会生成一个完全不同的Symbol值。
 */
const sym = Symbol();
const obj = { [sym]: "some value" };
console.log(obj[sym]); // 'some value'

//#endregion

//#region Well-Known Symbol

/**
 * JavaScript内置了一些所谓的Well-Known Symbol常量。
 * 这些Symbol常量用作对象属性名，它们的功能是定制对象的特定行为。
 * 在ECMAScript 2015规范中一共定义了11个Well-Known Symbol常量:
 *
 * Symbol.hasInstance：方法值，与instanceof运算符行为相关
 * Symbol.isConcatSpreadable：布尔值，
 *      表示在执行Array.prototype.concat方法时，
 *      一个对象是否允许被展开
 * Symbol.iterator：方法值，表示迭代器函数，与for...of语句的行为相关
 * Symbol.match：用于定义String.prototype.mathc()方法的行为
 * Symbol.replace：用于定义String.prototype.replace()方法的行为
 * Symbol.search：用于定义String.prototype.search()方法的行为
 * Symbol.species：用于定义在创建派生对象时使用的构造函数
 * Symbol.split：用于定义String.prototype.split()方法的行为
 * Symbol.toPrimitive：方法值，用于定义将一个对象转换为原始值时的行为
 * Symbol.toStringTag：用于定义Object.prototype.toString()方法的行为
 * Symbol.unscopables：用于定义对象值在with语句中的行为
 */

//#endregion

//#endregion

//#region Object

/**
 * 对象是属性的集合，每个对象属性都属于以下两种形式之一：
 *
 * 1. 数据属性。
 *      可以为Undefined、Null、Boolean、String、Number、Symbol和Object类型的值。
 *
 * 2. 存取器属性。
 *      由一个或两个存取器方法构成，用于获取和设置Undefined、Null、Boolean、String、
 *      Number、Symbol和Object类型的值。
 *
 * 对象属性使用键值来标识，键值只能为字符串或Symbol值。
 * 所有字符串（也包括空字符串）和Symbol值都是合法的键值。
 */

//#endregion

//#region 字面量

/**
 * 在计算机科学中，字面量用于在源代码中表示某个固定值。
 * 在JavaScript程序中，字面量不是变量，它是直接给出的固定值。
 */

// Null字面量
/**
 * Null字面量只有一个，记作null。
 */

// Boolean字面量
/**
 * Boolean字面量有两个，分别记作true和false。
 */

// TODO

//#endregion

//#endregion
