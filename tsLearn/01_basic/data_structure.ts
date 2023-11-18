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

// Number字面量
/**
 * Number字面量包含四类：
 * 二进制整数字面量、八进制整数字面量、十进制数字面量以及十六进制整数字面量。
 *
 * 二进制整数字面量以0b或0B开头（第一个字符为数字0），并只包含数字0或1。
 * 八进制整数字面量以0o或0O开头（第一个字符为数字0，第二个字符为字母o），
 *      并且只包含数字0至7。
 * 十进制数字面量由一串数字组成，支持整数、小数和科学记数法。
 * 十六进制整数字面量以0x或0X开头（第一个字符为数字0），
 *      可以包含数字0至9、小写字母a至f以及大写字母A至F。
 */

// 字符串字面量
/**
 * 字符串字面量是使用一对单引号或双引号包围起来的Unicode字符。
 * 字符串字面量中可以包含Unicode转义序列和十六进制转义序列。
 * JavaScript中的主流编码风格推荐使用单引号表示字符串字面量。
 */

// 模板字面量
/**
 * 模板字面量是ECMAScript 2015引入的新特性，它提供了一种语法糖来帮助构造字符串。
 * 模板字面量的出现帮助开发者解决了一些长久以来的痛点，如动态字符串的拼接和创建多行字符串等。
 * 模板字符串的基本语法是使用反引号“`”（键盘上数字键1左侧的按键）替换了字符串字面量中的单、双引号。
 */

/**
 * 多行字符串：
 * 在使用字符串字面量创建多行字符串时，需要在每一处换行的位置添加转义字符“\n”，可读性较差。
 */
const template01 =
  "\n<table>\n<tr>\n<th>昵称</th>\n<th>性别</th>\n</tr>\n<tr>\n<td>多米</td>\n<td>女</td>\n</tr>\n</table>\n";

const template02 = `
<table>
    <tr>
        <th>昵称</th>
        <th>性别</th>
    </tr>
    <tr>
        <td>多米</td>
        <td>女</td>
    </tr>
</table>
`;

/**
 * 字符串占位符:
 * 使用字符串占位符能够将动态的内容插入生成的字符串中。
 * 字符串占位符使用“${}”符号表示，在大括号中可以插入任意的JavaScript表达式。
 * 例如，我们可以使用模板字面量来构造一个WebAPI地址
 */
const root = "https://api.github.com";
const owner = "microsoft";
const repo = "TypeScript";
// https://api.github.com/repos/microsoft/TypeScript
const url = `${root}/repos/${owner}/${repo}`;

//#endregion

//#region 对象
/**
 * 在JavaScript中，对象属于非原始类型。
 * 同时，对象也是一种复合数据类型，它由若干个对象属性构成。
 * 对象属性可以是任意数据类型，如数字、函数或者对象等。
 * 当对象属性为函数时，我们通常称之为方法。
 * 当然，这只是惯用叫法不同，在本质上并无差别。
 */

//#region 对象字面量
/**
 * 对象字面量也叫作对象初始化器，是最常用的创建对象的方法。
 */

/**
 * 数据属性：
 * 对象字面量的数据属性由属性名和属性值组成，语法如下所示：
 * {
 *      PropertyName: PropertyValue,
 * }
 * 在该语法中，PropertyName表示属性名；PropertyValue表示属性值。
 * 对象属性名可以为标识符、字符串字面量和数字字面量，对象属性值可以为任意值。
 */
let object_a = {
    age: 13, 
}
console.log(object_a);

/**
 * 存取器属性：
 * 一个存取器属性由一个或两个存取器方法组成，存取器方法分为get方法和set方法两种。
 * get方法能够将属性访问绑定到一个函数调用上，该方法用于获取一个属性值。
 * set方法可以将对象属性赋值绑定到一个函数调用上，当尝试给该属性赋值时，set方法就会被调用。
 * 存取器属性的语法如下所示：
 * {
 *      get PropertyName() {
 *          return PropertyValue;
 *      }
 *      set PropertyName(value) { }
 * }
 * 存取器属性中的get方法和set方法不要求同时存在。
 * 我们可以只定义get方法而不定义set方法，反过来也是一样。
 * 如果一个属性只定义了get方法而没有定义对应的set方法，那么该属性就成了只读属性。
 */
let object_b = {
    _age: 14,
    get age(){
        return this._age;
    },
    set age(newAge:number){
        this._age = newAge;
    }
}
console.log(object_b.age);
object_b.age = 15;
console.log(object_b.age);

/**
 * 可计算属性名：
 * 可计算属性名是指在定义对象字面量属性时使用表达式作为属性名。可计算属性名适用于对象属性名需要动态计算的场景之中。属性名表达式求值后将得到一个字符串或Symbol值，该字符串或Symbol值将被用作对象属性名。它的语法如下所示：
 * {
 *      [PropertyExpression]: PropertyValue,
 *      get [PropertyExpression] () {
 *          return PropertyValue;
 *      },
 *      set [PropertyExpression] (value) { }
 * }
 */
let prefix = "start"
let suffix = "end"
let object_c = {
    [prefix + suffix]: 13,
    get [prefix](): string {
        return prefix
    },
    set [suffix](name:string) {
        this.name = name
    }
}
//#endregion

//#region 原型对象
/**
 * 每个对象都有一个原型。
 * 对象的原型既可以是一个对象，即原型对象，也可以是null值。
 * 原型对象又有其自身的原型，因此对象的原型会形成一条原型链，原型链将终止于null值。
 * 原型对象本质上是一个普通对象，用于在不同对象之间共享属性和方法。
 * 对象与其原型之间具有隐含的引用关系。
 *
 * 原型能够用来在不同对象之间共享属性和方法，JavaScript中的继承机制也是通过原型来实现的。
 * 原型的作用主要体现在查询对象某个属性或方法时会沿着原型链依次向后搜索。
 * 如果直到原型链的尽头（null值）也没有找到相应属性，那么会返回undefined值而不是产生错误。
 *
 * 如果对象本身和其原型对象上同时存在要访问的属性，那么就会产生遮蔽效果。
 *
 * 需要注意的是，原型对象在属性查询和属性设置时起到的作用是不对等的。
 * 在查询对象属性时会考虑对象的原型，但是在设置对象属性时不会考虑对象的原型，
 * 而是直接修改对象本身的属性值。
 */
//#endregion

//#endregion

//#region 数组
/**
 * 数组表示一组有序元素的集合，它使用数字作为元素索引值。
 * JavaScript中的数组不是独立的数据类型，它属于对象数据类型。
 */

//#region 数组字面量
/**
 * 数组字面量是常用的创建数组的方法。
 * 数组字面量使用一对中括号“[]”将数组元素包含在内，数组元素之间使用逗号分隔。
 */
const colors = ["red", "green", "blue"];
console.log(colors);
//#endregion

//#region 数组中的元素
/**
 * 数组中的元素可以为任意类型的值，如数字、函数或对象等。
 * 数组元素的类型也不必全部相同。数组元素可通过数字索引进行访问，索引值从零开始。
 * 当数组访问越界或使用了未知的索引时不会产生错误，而是会返回undefined值。
 *
 * 数组的长度表示数组中容纳的元素数量。
 * 在经典的数组数据结构里，数组是内存中一段长度固定的连续存储空间。
 * 在一些编程语言中声明数组时需要指定数组长度，并且之后无法动态改变。
 * JavaScript中的数组没有这个限制，因为它本质上是对象，数组元素相当于对象的一个属性。
 * 通过数组的length属性就能够获取数组的长度。
 * JavaScript数组的长度并不固定，当我们在数组中插入或删除元素时，数组长度会随之改变。
 */
const fruits = ["apple", 1, true, 2.3];
console.log(fruits);
console.log(fruits.length);
//#endregion

//#endregion

//#region 函数
/**
 * 函数是程序必不可少的组成部分之一，它允许我们创建可重用的代码单元。
 * 我们通常会将具有独立功能的代码提取成函数以提高代码的可重用性与可测试性。
 *
 * JavaScript中的函数是“头等函数”，它具有以下特性：
 *      1. 函数可以赋值给变量或对象属性。
 *      2. 函数可以作为参数传递给另一个函数。
 *      3. 函数可以作为函数返回值。
 *
 * 因为支持头等函数，所以JavaScript也在一定程度上支持函数式编程范式。
 * 接下来将概括介绍函数的使用方法。
 */

//#region 函数声明
/**
 * 函数声明是最简单直接的函数定义方式。它的语法如下所示：
 * function name(param0, param1, ...){
 *      body
 * }
 * 函数声明由以下几部分组成：
 *      1. 必须以function关键字开始。
 *      2. 必须指定一个函数名，函数名应该是合法的标识符。
 *      3. 由一对小括号包围的可选形式参数列表，参数可以有零或多个。
 *      4. 由一对大括号包围的函数体。
 */
function showLog(message: string) {
  console.log(message);
}
showLog("函数声明");
//#endregion

//#region 函数表达式
/**
 * 除了函数声明外，还可以使用函数表达式来定义一个函数。
 * 函数表达式的语法与函数声明的语法有一个重要区别，那就是函数表达式中的函数名是可选的。
 * 当没有指定函数名时，该函数也叫作匿名函数。
 * 因为函数表达式属于表达式，并且表达式能够产生一个值，
 * 所以函数表达式能够产生一个值，该值是一个函数。
 * 函数表达式能够被应用在任何一处期待值的地方。
 * 例如，可以将函数表达式赋值给一个变量，也可以将函数表达式当作参数传递给其他函数。
 */

//立即执行的函数表达式
/**
 * 立即执行的函数表达式指的是在定义时就立即被调用的函数表达式。
 * 其常见的定义方式有以下两种：
 */
(function () {
  // ...
  console.log("立即执行的函数表达式1");
})();
// 或者
(function () {
  // ...
  console.log("立即执行的函数表达式2");
})();
/**
 * 初看立即执行的函数表达式时可能会令人感到迷惑，尤其是包围函数表达式的一对小括号。
 * 这对小括号叫作分组运算符，常被使用在数学计算和逻辑表达式中。
 * 在分组运算符内部是一个表达式，将函数置于分组运算符之内时，该函数即成了函数表达式。
 * 若删除分组运算符，那么函数定义就成了函数声明，函数声明不允许被立即调用。
 * 实际上，分组运算符并非唯一能够将函数定义转换成函数表达式的运算符，
 * 例如，一元运算符也能完成这项工作。但综合来看，使用分组运算符是最优雅且副作用最小的选择。
 *
 * 在立即执行的函数表达式中，我们在起始和结尾位置分别添加了分号。
 * 这是为了防止使用代码压缩工具处理代码之后产生错误的语法。
 * 例如，将两个立即执行的函数表达式合并到一行并连接在一起后就可能出现错误。
 *
 * 立即执行的函数表达式有两个特点：
 * 其一是函数表达式和函数声明一样，都能够创建出新的作用域，
 * 在函数内部声明的变量不会对函数外部产生影响，因此提供了一定的数据封装性；
 * 其二是立即执行的函数表达式自身对外部作用域没有任何影响。
 *
 * 在立即执行的函数表达式外部，无法通过函数表达式的函数名来访问它，
 * 而且在立即执行的函数表达式中，没有将函数引用赋值给任何外部变量。
 * 因此，立即执行的函数表达式与外界是孤立的。
 * 立即执行的函数表达式就好比创建的临时目录一样，我们可以在里面放置操作的临时文件，
 * 待操作完成后创建的临时目录和临时文件都会被清理掉，就好像没有出现过一样。
 */
//#endregion

//#region 箭头函数
/**
 * 箭头函数是ECMAScript 2015中新增的特性，用来定义匿名的函数表达式。
 * 箭头函数一定是匿名函数。箭头函数最显著的特点是使用“胖箭头”符号连接函数的形式参数列表和函数体。
 * 箭头函数的基本语法如下所示：
 *
 * (param0, param1, ...) => { body }
 *
 * 箭头函数除了能够提供简洁的语法外还有一个特别重要的特性，
 * 那就是箭头函数本身没有this绑定，它使用外层作用域中的this绑定。
 * 该特性能够帮助缓解程序中常见的一些错误。
 */
let func = () => {
  console.log("箭头函数");
};
func();
//#endregion

//#endregion

//#endregion
