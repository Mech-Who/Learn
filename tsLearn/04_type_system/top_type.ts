//#region 顶端类型
/**
 * 顶端类型（Top Type）源自于数学中的类型论，同时它也被广泛应用于计算机编程语言中。
 * 顶端类型是一种通用类型，有时也称为通用超类型，因为在类型系统中，所有类型都是顶端类型的子类型，
 * 或者说顶端类型是所有其他类型的父类型。
 * 顶端类型涵盖了类型系统中所有可能的值。
 *
 * TypeScript中有以下两种顶端类型：
 *
 * 1. any
 * 2. unknown
 */

//#region any
/**
 * any类型是从TypeScript 1.0开始就支持的一种顶端类型。
 * any类型使用any关键字作为标识，
 * 示例如下：
 */
let x5: any;

/**
 * 在TypeScript中，所有类型都是any类型的子类型。
 * 我们可以将任何类型的值赋值给any类型。
 * 示例如下：
 */
let x6: any;

x6 = true;
x6 = "hi";
x6 = 3.14;
x6 = 99999n;
x6 = Symbol();
x6 = undefined;
x6 = null;
x6 = {};
x6 = [];
x6 = function () {};

/**
 * 需要注意的是，虽然any类型是所有类型的父类型，
 * 但是TypeScript允许将any类型赋值给任何其他类型。
 * 示例如下：
 */
let x7: any;

let a18: boolean = x7;
let b18: string = x7;
let c18: number = x7;
let d18: bigint = x7;
let e18: symbol = x7;
let f18: void = x7;
let g18: undefined = x7;
let h18: null = x7;

/**
 * 在any类型上允许执行任意的操作而不会产生编译错误。
 * 例如，我们可以读取any类型的属性或者将any类型当作函数调用，
 * 就算any类型的实际值不支持这些操作也不会产生编译错误。
 * 示例如下：
 */
const a19: any = 0;
a19.length;
a19();
a19[0];

/**
 * 在程序中，我们使用any类型来跳过编译器的类型检查。
 * 如果声明了某个值的类型为any类型，那么就相当于告诉编译器：
 * “不要对这个值进行类型检查。”当TypeScript编译器看到any类型的值时，
 * 也会对它开启“绿色通道”，
 * 让其直接通过类型检查。
 * 在将已有的JavaScript程序迁移到TypeScript程序的过程中，
 * 使用any类型来暂时绕过类型检查是一项值得掌握的技巧。
 * 示例如下：
 */
function parse(data: any) {
  // 编译器不检查data参数的类型
  console.log(data.id);
}

/**
 * 从长远来看，我们应该尽量减少在代码中使用any类型。
 * 因为只有开发者精确地描述了类型信息，TypeScript编译器才能够更加准确有效地进行类型检查，
 * 这也是我们选择使用TypeScript语言的主要原因之一。
 *
 * --noImplicitAny
 *
 * TypeScript中的类型注解是可选的。若一个值没有明确的类型注解，
 * 编译器又无法自动推断出它的类型，那么这个值的默认类型为any类型。
 * 示例如下：
 */
function f4(x) {
  // 参数x的类型给为any
  console.log(x);
}

function f5(x: any) {
  console.log(x);
}

/**
 * 此例中，函数f1的参数x没有使用类型注解，编译器也无法从代码中推断出参数x的类型。
 * 于是，函数f1的参数x将隐式地获得any类型。最终，函数f1的类型等同于函数f2的类型。
 * 在这种情况下，编译器会默默地忽略对参数x的类型检查，
 * 这会导致编译器无法检查出代码中可能存在的错误。
 *
 * 在大多数情况下，我们想要避免上述情况的发生。
 * 因此，TypeScript提供了一个“--noImplicitAny”编译选项来控制该行为。
 * 当启用了该编译选项时，如果发生了隐式的any类型转换，那么会产生编译错误。
 * 示例如下：
 */
function f6(x) {
  // 编译错误！参数'x'具有隐式的'any'类型
  console.log(x);
}
//此例中，参数x具有隐式的any类型，因此将产生编译错误。

/**
 * 我们可以使用如下方式在“tsconfig.json”配置文件中启用“--noImplicitAny”编译选项：
 * {
 *    "compilerOptions": {
 *        "noImplicitAny": true
 *    }
 * }
 */
//关于配置文件的详细介绍请参考8.3节。
//#endregion

//#region unknown
/**
 * TypeScript 3.0版本引入了另一种顶端类型unknown。
 * unknown类型使用unknown关键字作为标识。示例如下：
 */
let x8: unknown;

/**
 * 根据顶端类型的性质，任何其他类型都能够赋值给unknown类型，该行为与any类型是一致的。
 * 示例如下：
 */
let x9: unknown;

x9 = true;
x9 = "hi";
x9 = 3.14;
x9 = 99999n;
x9 = Symbol();
x9 = undefined;
x9 = null;
x9 = {};
x9 = [];
x9 = function () {};

/**
 * unknown类型是比any类型更安全的顶端类型，
 * 因为unknown类型只允许赋值给any类型和unknown类型，
 * 而不允许赋值给任何其他类型，该行为与any类型是不同的。
 * 示例如下：
 */
let x10: unknown;

// 正确
const a20: any = x10;
const b20: unknown = x10;

// // 错误
// const a21: boolean = x10;
// const b21: string = x10;
// const c21: number = x10;
// const d21: bigint = x10;
// const e21: symbol = x10;
// const f21: undefined = x10;
// const g21: null = x10;

/**
 * 同时，在unknown类型上也不允许执行绝大部分操作。
 * 示例如下：
 */
let x11: unknown;

// // 错误
// x11 + 1;
// x11.foo;
// x11();

/**
 * 在程序中使用unknown类型时，我们必须将其细化为某种具体类型，否则将产生编译错误。
 * 示例如下：
 */
function f9(message: any) {
  return message.length;
  // 无编译错误
}

f9(undefined);

// function f10(message: unknown) {
//   return message.length;
//   // 编译错误！属性'length'不存在'unknown'类型上
// }
//
// f10(undefined);

/**
 * 此例中，函数f1的参数message为any类型，
 * 在函数体中直接读取参数message的length属性不会产生编译错误，
 * 因为编译器不会对any类型进行任何类型检查。
 * 但如果像第7行那样在调用f1函数时传入undefined值作为实际参数，
 * 则会产生运行时的类型错误。
 *
 * 在函数f2中，我们将参数message的类型定义为unknown类型。
 * 这样做的话，在函数体中就不能直接读取参数message的length属性，
 * 否则将产生编译错误。在使用unknown类型的参数message时，
 * 编译器会强制我们将其细化为某种具体类型。
 * 示例如下：
 */
function f11(message: unknown) {
  if (typeof message === "string") {
    return message.length;
  }
}

f11(undefined);

/**
 * 此例中，我们使用typeof运算符去检查参数message是否为字符串，
 * 只有当message是一个字符串时，我们才会去读取其length属性。
 * 这样修改之后，既不会产生编译错误，也不会产生运行时错误。
 */
//#endregion

// 小结
/**
 * 现在，我们已经了解了any类型和unknown类型的功能与特性。
 * 下面我们将对两者进行简单的对比与总结。
 *
 * 1. TypeScript中仅有any和unknown两种顶端类型。
 * 2. TypeScript中的所有类型都能够赋值给any类型和unknown类型，相当于两者都没有写入的限制。
 * 3. any类型能够赋值给任何其他类型，唯独不包括马上要介绍的never类型。
 * 4. unknown类型仅能够赋值给any类型和unknown类型。
 * 5. 在使用unknown类型之前，必须将其细化为某种具体类型，而使用any类型时则没有任何限制。
 * 6. unknown类型相当于类型安全的any类型。这也是在有了any类型之后，TypeScript又引入unknown类型的根本原因。
 * 
 * 在程序中，我们应尽量减少顶端类型的使用，因为它们是拥有较弱类型约束的通用类型。
 * 如果在编码时确实无法知晓某个值的类型，那么建议优先使用unknown类型来代替any类型，
 * 因为它比any类型更加安全。
 */
//#endregion
