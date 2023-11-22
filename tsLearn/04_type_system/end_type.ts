//#region 尾端类型
/**
 * 在类型系统中，尾端类型（Bottom Type）是所有其他类型的子类型。
 * 由于一个值不可能同时属于所有类型，例如一个值不可能同时为数字类型和字符串类型，
 * 因此尾端类型中不包含任何值。
 * 尾端类型也称作0类型或者空类型。
 *
 * TypeScript中只存在一种尾端类型，即never类型。
 */

//#region never
/**
 * TypeScript 2.0版本引入了仅有的尾端类型—never类型。
 * never类型使用never关键字来标识，不包含任何可能值。
 * 示例如下：
 */
function f(): never {
  throw new Error();
}

/**
 * 根据尾端类型的定义，never类型是所有其他类型的子类型。
 * 所以，never类型允许赋值给任何类型，尽管并不存在never类型的值。
 * 示例如下：
 */
let x22: never;

let a22: boolean = x22;
let b22: string = x22;
let c22: number = x22;
let d22: bigint = x22;
let e22: symbol = x22;
let f22: void = x22;
let g22: undefined = x22;
let h22: null = x22;

/**
 * 正如尾端类型其名，它在类型系统中位于类型结构的最底层，
 * 没有类型是never类型的子类型。因此，除never类型自身外，
 * 所有其他类型都不能够赋值给never类型。
 * 示例如下：
 */
let x23: never;
let y23: never;

// 正确
x23 = y23;

// 错误
x23 = true;
x23 = "hi";
x23 = 3.14;
x23 = 99999n;
x23 = Symbol();
x23 = undefined;
x23 = null;
x23 = {};
x23 = [];
x23 = function () {};

/**
 * 需要注意的是，就算是类型约束最宽松的any类型也不能够赋值给never类型。
 * 示例如下：
 */
let x24: any;
let y24: never = x24;
// 编译错误：类型'any'不能赋值给类型'never'
//#endregion

//#region 应用场景
/**
 * never类型主要有以下几种典型的应用场景。
 */

//场景一
/**
 * never类型可以作为函数的返回值类型，它表示该函数无法返回一个值。
 * 我们知道，如果函数体中没有使用return语句，
 * 那么在正常执行完函数代码后会返回一个undefined值。
 * 在这种情况下，函数的返回值类型是void类型而不是never类型。
 * 只有在函数根本无法返回一个值的时候，函数的返回值类型才是never类型。
 *
 * 一种情况就是函数中抛出了异常，这会导致函数终止执行，从而不会返回任何值。
 * 在这种情况下，函数的返回值类型为never类型。
 * 示例如下：
 */
function throwError(): never {
  throw new Error();
  // <- 该函数永远无法执行到末尾，返回值类型为'never'
}

/**
 * 此例中，throwError函数的功能是直接抛出一个异常，它永远也不会返回一个值，
 * 因此该函数的返回值类型为never类型。
 *
 * 若函数中的代码不是直接抛出异常而是间接地抛出异常，
 * 那么函数的返回值类型也是never类型。
 * 示例如下：
 */
function throwError2(): never {
  throw new Error();
}

function fail(): never {
  return throwError2();
}

/**
 * 此例中，fail函数包含了一条return语句，return语句中表达式的类型为never类型，
 * 因此fail函数的返回值类型也为never类型。除了抛出异常之外，
 * 还有一种情况函数也无法正常返回一个值，
 * 即如果函数体中存在无限循环从而导致函数的执行永远也不会结束，
 * 那么在这种情况下函数的返回值类型也为never类型。
 * 示例如下：
 */
function infiniteLoop(): never {
  while (true) {
    console.log("endless...");
  }
}
//此例中，infiniteLoop函数的执行永远也不会结束，这意味着它无法正常返回一个值。
//因此，该函数的返回值类型为never类型。

// 场景二
/**
 * 在“条件类型”中常使用never类型来帮助完成一些类型运算。
 * 例如，“Exclude<T, U>”类型是TypeScript内置的工具类型之一，
 * 它借助于never类型实现了从类型T中过滤掉类型U的功能。
 * 示例如下：
 */
type Exclude<T, U> = T extends U ? never : T;

/**
 * 下例中，我们使用“Exclude<T, U>”工具类型从联合类型“boolean | string”中剔除了string类型，
 * 最终得到的结果类型为boolean类型。
 * 示例如下：
 */
type T = Exclude<boolean | string, string>; // boolean
//关于条件类型的详细介绍请参考6.7节。

/**
 * 最后一个要介绍的never类型的应用场景与类型推断功能相关。
 * 在TypeScript编译器执行类型推断操作时，如果发现已经没有可用的类型，
 * 那么推断结果为never类型。
 * 示例如下：
 */
function getLength(message: string) {
  if (typeof message === "string") {
    message; // string
  } else {
    message; // never
  }
}
/**
 * 此例中，getLength函数声明定义了参数message的类型为string。
 * 
 * 第2行，在if语句中使用typeof运算符来判断message是否为string类型。
 * 若参数message为string类型，则执行该分支内的代码。
 * 因此，第3行中参数message的类型为string类型。
 * 
 * 第5行，在else分支中参数message的类型应该是非string类型。
 * 由于函数声明中定义了参数message的类型是string类型，
 * 因此else分支中已经不存在其他可选类型。在这种情况下，
 * TypeScript编译器会将参数message的类型推断为never类型，
 * 表示不存在这样的值。
 */
//#endregion

//#endregion
