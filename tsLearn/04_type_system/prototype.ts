//#region 原始类型

/**
 * JavaScript语言中的每种原始类型都有与之对应的TypeScript类型。
 * 除此之外，TypeScript还对原始类型进行了细化与扩展，
 * 增加了枚举类型和字面量类型等。
 *
 * 到目前为止，TypeScript中的原始类型包含以下几种：
 * 1. boolean
 * 2. string
 * 3. number
 * 4. bigint
 * 5. symbol
 * 6. undefined
 * 7. null
 * 8. void
 * 9. 枚举类型
 * 10. 字面量类型
 *
 * 本节将详细介绍除枚举类型和字面量类型之外的原始类型。
 * 对于枚举类型和字面量类型，我们将在独立的章节中介绍它们。
 */

//#region boolean
/**
 * TypeScript中的boolean类型对应于JavaScript中的Boolean原始类型。
 * 该类型能够表示两个逻辑值：true和false。
 * boolean类型使用boolean关键字来表示。
 * 示例如下：
 */
const yes: boolean = true;
const no: boolean = false;
//#endregion

//#region string
/**
 * TypeScript中的string类型对应于JavaScript中的String原始类型。
 * 该类型能够表示采用Unicode UTF-16编码格式存储的字符序列。
 *
 * string类型使用string关键字表示。
 * 我们通常使用字符串字面量或模板字面量来创建string类型的值。
 * 示例如下：
 */
const foo: string = "foo";
const bar: string = `bar, ${foo}`;
//#endregion

//#region number
/**
 * TypeScript中的number类型对应于JavaScript中的Number原始类型。
 * 该类型能够表示采用双精度64位二进制浮点数格式存储的数字。
 * number类型使用number关键字来表示。
 * 示例如下：
 */
// 二进制
const bin: number = 0b1010;
// 八进制
const oct: number = 0o744;
// 十进制
const integer: number = 10;
const float: number = 3.14;
// 十六进制
const hex: number = 0xffffff;
//#endregion

//#region bigint
/**
 * TypeScript中的bigint类型对应于JavaScript中的BigInt原始类型。
 * 该类型能够表示任意精度的整数，但也仅能表示整数。
 * bigint采用了特殊的对象数据结构来表示和存储一个整数。
 *
 * bigint类型使用bigint关键字来表示。
 * 示例如下：
 */
// 二进制整数
const bin2: bigint = 0b1010n;
// 八进制整数
const oct2: bigint = 0o744n;
// 十进制整数
const integer2: bigint = 10n;
// 十六进制整数
const hex2: bigint = 0xffffffn;
//#endregion

//#region symbol 与 unique symbol
/**
 * TypeScript中的symbol类型对应于JavaScript中的Symbol原始类型。
 * 该类型能够表示任意的Symbol值。
 *
 * symbol类型使用symbol关键字来表示。
 * 示例如下：
 */
// 自定义symbol
const key: symbol = Symbol();
// Well-Known Symbol
const symbolHasInstance: symbol = Symbol.hasInstance;

/**
 * 在3.4节中介绍过，字面量能够表示一个固定值。
 * 例如，数字字面量“3”表示固定数值“3”；
 * 字符串字面量“'up'”表示固定字符串“'up'”。
 * symbol类型不同于其他原始类型，它不存在字面量形式。
 * symbol类型的值只能通过“Symbol()”和“Symbol.for()”函数
 * 来创建或直接引用某个“Well-Known Symbol”值。
 * 示例如下：
 */
const s0: symbol = Symbol();
const s1: symbol = Symbol.for("foo");
const s2: symbol = Symbol.hasInstance;
const s3: symbol = s0;

/**
 * 为了能够将一个Symbol值视作表示固定值的字面量，
 * TypeScript引入了“unique symbol”类型。
 * “unique symbol”类型使用“unique symbol”关键字来表示。
 * 示例如下：
 */
const s4: unique symbol = Symbol();
const s5: unique symbol = Symbol.for("s5");

/**
 * “unique symbol”类型的主要用途是用作接口、类等类型中的可计算属性名。
 * 因为如果使用可计算属性名在接口中添加了一个类型成员，
 * 那么必须保证该类型成员的名字是固定的，否则接口定义将失去意义。
 * 下例中，允许将“unique symbol”类型的常量x作为接口的类型成员，
 * 而symbol类型的常量y不能作为接口的类型成员，因为symbol类型不止包含一个可能值：
 */
const x4: unique symbol = Symbol();
const y4: symbol = Symbol();

interface Foo {
  [x4]: string; // 正确
  //[y4]: string; //错误，接口中的计算属性名称必须引用类型为字面量类型或'unique symbol'的表达式
}
//我们将在后面的章节中介绍类和接口类型。

/**
 * 实际上，“unique symbol”类型的设计初衷是作为一种变通方法，
 * 让一个Symbol值具有字面量的性质，即仅表示一个固定的值。
 * “unique symbol”类型没有改变Symbol值没有字面量表示形式的事实。
 * 为了能够将某个Symbol值视作表示固定值的字面量，
 * TypeScript对“unique symbol”类型和Symbol值的使用施加了限制。
 *
 * TypeScript选择将一个Symbol值与声明它的标识符绑定在一起，
 * 并通过绑定了该Symbol值的标识符来表示“Symbol字面量”。
 * 这种设计的前提是要确保Symbol值与标识符之间的绑定关系是不可变的。
 * 因此，TypeScript中只允许使用const声明或readonly属性声明来定义“unique symbol”类型的值。
 * 示例如下：
 */
// 必须使用const声明
const a2: unique symbol = Symbol();

interface WithUniqueSymbol {
  // 必须使用readonly修饰符
  readonly b: unique symbol;
}

class C {
  // 必须使用static和reaadonly修饰符
  static readonly c: unique symbol = Symbol();
}

/**
 * 此例第1行，常量a的初始值为Symbol值，其类型为“uniquesymbol”类型。
 * 在标识符a与其初始值Symbol值之间形成了绑定关系，并且该关系是不可变的。
 * 这是因为常量的值是固定的，不允许再被赋予其他值。标识符a能够固定表示该Symbol值，
 * 标识符a的角色相当于该Symbol值的字面量形式。
 *
 * 如果使用let或var声明定义“unique symbol”类型的变量，那么将产生错误，
 * 因为标识符与Symbol值之间的绑定是可变的。
 * 示例如下：
 */
/**
 * let a: unique symbol = Symbol();
 * 错误：'unique symbol' 类型的变量必须使用'const'
 *
 * var b: unique symbol = Symbol();
 * 错误：'unique symbol' 类型的变量必须使用'const'
 */

/**
 * “unique symbol”类型的值只允许使用“Symbol()”函数或“Symbol.for()”方法的返回值进行初始化，
 * 因为只有这样才能够“确保”引用了唯一的Symbol值。
 * 示例如下：
 */
const a4: unique symbol = Symbol();
const b4: unique symbol = Symbol("desc");
//const c4: unique symbol = a4;
//错误：a的类型与c的类型不兼容
//const d4: unique symbol = b4;
//错误：b的类型与d的类型不兼容

/**
 * 但是，我们知道使用相同的参数调用“Symbol.for()”方法实际上返回的是相同的Symbol值。
 * 因此，可能出现多个“unique symbol”类型的值实际上是同一个Symbol值的情况。
 * 由于设计上的局限性，TypeScript目前无法识别出这种情况，因此不会产生编译错误，
 * 开发者必须要留意这种特殊情况。
 * 示例如下：
 */
const a5: unique symbol = Symbol.for("same");
const b5: unique symbol = Symbol.for("same");
//此例中，编译器会认为a和b是两个不同的Symbol值，而实际上两者是相同的。

/**
 * 在设计上，每一个“unique symbol”类型都是一种独立的类型。
 * 在不同的“unique symbol”类型之间不允许相互赋值；
 * 在比较两个“unique symbol”类型的值时，也将永远返回false。
 * 示例如下：
 */
const a6: unique symbol = Symbol();
const b6: unique symbol = Symbol();
/*
if (a6 === b6) {
  // 该条件永远为false
  console.log("unreaachable code");
}
*/

/**
 * 由于“unique symbol”类型是 symbol类型的子类型，
 * 因此可以将“unique symbol”类型的值赋值给symbol类型。
 * 示例如下：
 */
const a7: unique symbol = Symbol();
const b7: symbol = a7;

/**
 * 如果程序中未使用类型注解来明确定义是symbol类型还是“unique symbol”类型，
 * 那么TypeScript会自动地推断类型。
 * 示例如下：
 */
// a8和b8均为'symbol'类型，因为没有使用const声明
let a8 = Symbol();
let b8 = Symbol.for("");
// c8和d8均为'unique symbol'类型
const c8 = Symbol();
const d8 = Symbol.for("");
// e8和f8均为'symbol'类型，没有使用过Symbol()或Symbol.for()初始化
const e8 = a8;
const f8 = a8;
// 关于类型推断的详细介绍请参考7.3节。
//#endregion

//#region Nullable
/**
 * TypeScript中的Nullable类型指的是值可以为undefined或null的类型。
 *
 * JavaScript中有两个比较特殊的原始类型，即Undefined类型和Null类型。
 * 两者分别仅包含一个原始值，即undefined值和null值，
 * 它们通常用来表示某个值还未进行初始化。
 *
 * 在TypeScript早期的版本中，没有提供与JavaScript中Undefined类型和Null类型相对应的类型。
 * TypeScript允许将undefined值和null值赋值给任何其他类型。
 * 虽然在TypeScript语言的内部实现中确实存在这两种原始类型，
 * 但是之前没有将它们开放给开发者使用。
 *
 * TypeScript 2.0版本的一个改变就是增加了undefined类型和null类型供开发者使用。
 * 虽然看上去是一项普通的改进，但却有着非凡的意义。
 * 因为，不当地使用undefined值和null值是程序缺陷的主要来源之一，
 * 并有可能导致价值亿万美元的错误[1]。
 * 相信一定有不少读者都曾经遇到过如下的JavaScript程序错误：
 *
 * TypeError: Cannot read property 'xxx' of undefined
 *
 * 现在，在TypeScript程序中能够明确地指定某个值的类型是否为undefined类型或null类型。
 * TypeScript编译器也能够对代码进行更加细致的检查以找出程序中潜在的错误。
 */

//undefined
/**
 * undefined类型只包含一个可能值，即undefined值。
 * undefined类型使用undefined关键字标识。
 * 示例如下：
 */
const foo2: undefined = undefined;

//null
/**
 * null类型只包含一个可能值，即null值。
 * null类型使用null关键字标识。
 * 示例如下：
 */
const foo3: null = null;

//--strictNullChecks
/**
 * TypeScript 2.0还增加了一个新的编译选项“--strictNullChecks”，
 * 即严格的null检查模式。虽然该编译选项的名字中只提及了null，
 * 但实际上它同时作用于undefined类型和null类型的类型检查。
 *
 * 在默认情况下，“--strictNullChecks”编译选项没有被启用。
 * 这时候，除尾端类型外的所有类型都是Nullable类型。
 * 也就是说，除尾端类型外所有类型都能够接受undefined值和null值。
 * 关于尾端类型的详细介绍请参考5.8节。
 *
 * 例如，在没有启用“--strictNullChecks”编译选项时，
 * 允许将undefined值和null值赋值给string类型等其他类型。
 * 示例如下：
 */
/**
 * --strictNullChecks=false
 */
/*
let m1: boolean = undefined;
let m2: string = undefined;
let m3: number = undefined;
let m4: bigint = undefined;
let m5: symbol = undefined;
let m6: undefined = undefined;
let m7: null = undefined;

let n1: boolean = null;
let n2: string = null;
let n31: number = null;
let n4: bigint = null;
let n5: symbol = null;
let n6: undefined = null;
let n7: null = null;
*/

/**
 * 该模式存在一个明显的问题，就是无法检查出空引用的错误。
 * 例如，已知某一个变量的类型是string，
 * 于是通过访问其length属性来获取该变量表示的字符串的长度。
 * 但如果string类型的变量值可以为undefined或null，
 * 那么这段代码在运行时将产生错误。
 * 示例如下：
 */
/**
 * --strictNullChecks=false
 */
/*
let foo3: string = undefined;    // 正确，可以通过类型检查
foo3.length;
*/
/*
运行结果：
Error: TypeError: Cannot read property 'length' of undefined

此例中，将undefined值赋值给string类型的变量foo时不会产生编译错误。
但是，在运行时尝试读取undefined值的length属性将产生类型错误。
这个问题可以通过启用“--strictNullChecks”编译选项来避免。
*/

/**
 * 当启用了“--strictNullChecks”编译选项时，
 * undefined值和null值不再能够赋值给不相关的类型。
 * 例如，undefined值和null值不允许赋值给string类型。
 * 在该模式下，undefined值只能够赋值给undefined类型；
 * 同理，null值也只能赋值给null类型。
 *
 * 还是以上例中的代码为例，如果我们启用了“--strictNullChecks”编译选项，
 * 那么TypeScript编译器就能够检查出代码中的错误。
 * 示例如下：
 */
/**
 * --strictNullChecks=true
 */
/*
let foo4: string = undefined;
*/
/*
编译错误！类型 'undefined' 不能赋值给类型 'string'

此例第4行，TypeScript在执行静态类型检查时就能够发现这处类型错误，
从而避免了在代码运行时才发现这个缺陷。
*/

/**
 * 前面我们说在启用了“--strictNullChecks”编译选项时，
 * undefined值只能够赋值给undefined类型，null值只能够赋值给null类型，
 * 实际上这种表述不完全准确。因为在该模式下，undefined值和null值允许赋值给顶端类型，
 * 同时undefined值也允许赋值给void类型。这些类型在后面的章节中会有详细介绍。
 * 示例如下：
 */
/**
 * --strictNullChecks=true
 */
/*
let m1: void = undefined;
let m2: any = undefined;
let m3: unknown = undefined;

let n2: any = null;
let n3: unknown = null;
*/

/**
 * undefined类型和null类型是不同的类型，它们必须被区分对待，不能互换使用。
 * 示例如下：
 */
/**
 * --strictNullChecks=true
 */
/*
const foo: undefined = null;
// 编译错误！类型 'null' 不能赋值给类型 'undefined'

const bar: null = undefined;
// 编译错误！类型 'undefined' 不能赋值给类型 'null'
*/

/**
 * 在了解了“--strictNullChecks”编译选项的作用后，让我们来看一看如何启用该编译选项。
 * 在默认情况下，“--strictNullChecks”编译选项没有被启用，
 * 我们需要在工程下的tsconfig.json配置文件中启用该编译选项，
 * 通过将“strictNullChecks”属性设置为“true”就能够启用“--strictNullChecks”编译选项。
 * 同理，如果将该属性设置为“false”则会关闭该编译选项。
 * 关于配置文件的详细介绍请参考8.3节。
 * 示例如下：
 * {
 *      "compilerOptions": {
 *          "strictNullChecks": true
 *      }
 * }
 *
 * 如果读者使用的是TypeScript官网提供的在线代码编辑器，
 * 则可以在“Config”菜单中找到该选项并选中，即可启用该选项。
 *
 * Null类型的发明者Tony Hoare曾将Null描述为“billion-dollarmistake”。
 */

//void
/**
 * void类型表示某个值不存在，该类型用作函数的返回值类型。
 * 若一个函数没有返回值，那么该函数的返回值类型为void类型。
 * 除了将void类型作为函数返回值类型外，在其他地方使用void类型是无意义的。
 * 关于函数类型的详细介绍请参考5.12节。
 *
 * void类型使用void关键字来表示。
 * 示例如下：
 */
function my_log(message: string): void {
  console.log(message);
}
// 此例中，log函数的参数类型为string，返回值类型为void，表示该函数“没有”返回值。

/**
 * 当启用了“--strictNullChecks”编译选项时，只允许将undefined值赋值给void类型。
 * 示例如下：
 */
/**
 * --strictNullChecks=true
 */
// 正确
function foo4(): void {
  return undefined;
}

// 编译错误！类型'null'不能复制给类型'void'
/*
function bar4(): void {
    return null;
}
*/

/**
 * 如果没有启用“--strictNullChecks”编译选项，
 * 那么允许将undefined值和null值赋值给void类型。
 * 示例如下：
 */
/**
 * --strictNullChecks=false
 */
// 正确
function foo5(): void {
  return undefined;
}
// 正确
/*
function bar5(): void {
    return null;
}
*/
//#endregion

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
  A = 0,    // 数字字面量
  B = "B",  // 字符串字面量
  C = `C`,  // 无替换值的模板字面量
  D = A,    // 引用前面定义的常量枚举成员
}

enum Bar4 {
    A = -1,             // 一元运算符
    B = 1 + 2,          // 二元运算符
    C = (4 / 2) * 3,    // 分组运算符（小括号）
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
    D = 'foo',
    E = `bar`,
    F = A,
}

// 计算枚举变量
/**
 *
 */

//#endregion

//#endregion

//#endregion

//#endregion
