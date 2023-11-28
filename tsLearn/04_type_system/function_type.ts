//#region 函数类型
/**
 * 在本节中，将介绍如何为函数添加类型，
 * 包括参数类型、返回值类型、this类型以及函数重载等。
 */

//#region 常规参数类型
/**
 * 在函数形式参数列表中，为参数添加类型注解就能够定义参数的类型。
 * 例如，下例中将add函数声明中的参数x和参数y的类型都定义为number类型：
 */
function add(x: number, y: number): number {
  return x + y;
}

/**
 * 针对函数表达式和匿名函数，我们也可以使用相同的方法来定义参数的类型。
 * 示例如下：
 */
const f12 = function (x: number, y: number) {
  return x + y;
};

/**
 * 如果在函数形式参数列表中没有明确指定参数类型，
 * 并且编译器也无法推断参数类型，那么参数类型将默认为any类型。
 * 示例如下：
 */
function add2(x, y) {
  // 参数x和y隐式地获得了'any'类型
  return x + y;
}

/**
 * 注意，如果启用了“--noImplicitAny”编译选项，那么此例中的代码将会产生编译错误。
 * 我们必须指明参数的类型，如果期望的类型就是any类型，则需要使用类型注解来明确地标注。
 * 示例如下：
 */
function add3(x: any, y: any) {
  // 参数x和y显式地获得了'any'类型
  return x + y;
}
//#endregion

//#region 可选参数类型
/**
 * 在JavaScript中，函数的每一个参数都是可选参数，
 * 而在TypeScript中，默认情况下函数的每一个参数都是必选参数。
 * 在调用函数时，编译器会检查传入实际参数的个数与函数定义中形式参数的个数是否相等。
 * 如果两者不相等，则会产生编译错误。
 * 如果一个参数是可选参数，那么就需要在函数类型定义中明确指定。
 *
 * 在函数形式参数名后面添加一个问号“?”就可以将该参数声明为可选参数。
 * 例如，下例中我们将add函数的参数y定义为可选参数：
 */
function add4(x: number, y?: number) {
  return x + (y ?? 0);
}

/**
 * 我们也可以同时定义多个可选参数。
 * 示例如下：
 */
function add5(x: number, y?: number, z?: number) {
  return x + (y ?? 0) + (z ?? 0);
}

/**
 * 函数的可选参数必须位于函数参数列表的末尾位置。
 * 在可选参数之后不允许再出现必选参数，否则将产生编译错误。
 * 例如，下例中add函数的第一个参数x是可选参数，
 * 在它之后的参数y是必选参数，因此将产生编译错误。
 * 示例如下：
 */
function add6(x?: number, y: number) {
  // 编译错误！必选参数不能出现在可选参数之后
}

/**
 * 如果函数的某个参数是可选参数，那么在调用该函数时既可以传入对应的实际参数，
 * 也可以完全不传入任何实际参数。例如，下例中参数x是必选参数，y是可选参数。
 * 在调用add函数时，既可以传入一个实际参数，也可以传入两个实际参数。
 * 但是，若没有传入参数或者传入了多于两个的参数，则将产生编译错误。
 * 示例如下：
 */
function add7(x: number, y?: number) {
  return x + (y ?? 0);
}

add7(); // 编译错误！
add7(1); // 正确
add7(1, 2); // 正确
add7(1, 2, 3); // 编译错误！

/**
 * 在“--strictNullChecks”模式下，
 * TypeScript会自动为可选参数添加undefined类型。
 * 因此，上例中add函数的定义等同于如下定义：
 */
function add8(x: number, y?: number | undefined) {
  return x + (y ?? 0);
}

/**
 * TypeScript允许给可选参数传入一个undefined值。
 * 示例如下：
 */
function add9(x: number, y?: number) {
  return x + (y ?? 0);
}

add9(1); // 1
add9(1, 2); // 3
add9(1, undefined); // 1

/**
 * 需要注意的是，为参数添加undefined类型不等同于该参数是可选参数。
 * 若省略了“?”符号，则参数将成为必选参数，在调用时必须传入一个实际参数值。
 */
//#endregion

//#region 默认参数类型
/**
 * 函数默认参数类型可以通过类型注解定义，也可以根据默认参数值自动地推断类型。
 * 例如，下例中函数默认参数x的类型通过类型注解明确定义，
 * 而默认参数y的类型则是根据默认值0推断出的类型，最后两个参数的类型均为number类型。
 * 示例如下：
 */
function add10(x: number, y = 0) {
  return x + y;
}

/**
 * 如果函数定义了默认参数，并且默认参数处于函数参数列表末尾的位置，
 * 那么该参数将被视为可选参数，在调用该函数时可以不传入对应的实际参数值。
 * 例如，下例中参数y是默认参数，且处于参数列表的末尾，因此参数y成了可选参数。
 * 在调用add函数时，允许不传入参数y的实际参数值。
 * 示例如下：
 */
function add11(x: number, y: number = 0) {
  return x + y;
}

add11(1); // 1
add11(1, 2); // 3

/**
 * 在语法上，同一个函数参数不允许同时声明为可选参数和默认参数，否则将产生编译错误。
 * 示例如下：
 */
function f13(x?: number) {
  // 编译错误！参数不能同时使用?符号和初始化值
}

/**
 * 如果默认参数之后存在必选参数，那么该默认参数不是可选的参数，
 * 在调用函数时必须传入对应的实际参数值。
 * 示例如下：
 */
function add12(x: number = 0, y: number) {
  return x + y;
}

add(1); // 编译错误！
add(1, 2); // 正确
add(undefined, 2); // 正确
//#endregion

//#region 剩余参数类型
/**
 * 必选参数、可选参数和默认参数处理的都是单个参数，
 * 而剩余参数处理的则是多个参数。如果函数定义中声明了剩余参数，
 * 那么在调用函数时会将多余的实际参数收集到剩余参数列表中。
 * 因此，剩余参数的类型应该为数组类型或元组类型。
 * 虽然剩余参数也可以定义为顶端类型或尾端类型，
 * 但是实际意义不大，因此不展开介绍。
 */

//#region 数组类型的剩余参数
/**
 * 最常见的做法是将剩余参数的类型声明为数组类型。
 * 例如，下例中的f函数定义了“number[]”类型的剩余参数：
 */
function f14(...args: number[]) {}

/**
 * 在调用定义了剩余参数的函数时，剩余参数可以接受零个或多个实际参数。
 * 示例如下：
 */
function f15(...args: number[]) {}

f15();
f15(0);
f15(0, 1);
//#endregion

//#region 元组类型的剩余参数
/**
 * 剩余参数的类型也可以定义为元组类型。
 * 例如，下例中剩余参数args的类型为包含两个元素的元组类型：
 */
function f16(...args: [boolean, number]) {}

/**
 * 如果剩余参数的类型为元组类型，
 * 那么编译器会将剩余参数展开为独立的形式参数声明，
 * 主要包括以下几种情况：
 */
// 1. 常规元组类型，示例如下：
function fa(...args: [boolean, number]) {}
// 等同于：
function fb(args_0: boolean, args_1: number) {}

// 2. 带有可选元素的元组类型，示例如下：
function fc(...args: [boolean, string?]) {}
// 等同于：
function fd(args_0: boolean, args_1?: string) {}

// 3. 带有剩余元素的元组类型，示例如下：
function fe(...args: [boolean, ...string[]]) {}
// 等同于：
function ff(args_0: boolean, ...args_1: string[]) {}

/**
 * 在了解了元组类型剩余参数的展开行为后，
 * 我们也就清楚了该如何传入对应的实际参数，
 * 如下所示：
 */
function f100(...args: [boolean, number, string]) {}
f100(true, 0, "");

function f101(...args: [boolean, number, string?]) {}
f101(true, 0, "");
f101(true, 0);

function f102(...args: [boolean, number, ...string[]]) {}
f102(true, 0);
f102(true, 0, "");
f102(true, 0, "", "hello");

function f103(...args: [boolean, number?, ...string[]]) {}
f103(true);
f103(true, 0);
f103(true, 0, "");
f103(true, 0, "", "hello");
//#endregion

//#endregion

//#region 结构参数类型
/**
 * 在4.3节中，我们介绍了如何对数组和对象进行解构。
 * 解构还可以应用在函数参数列表中。示例如下：
 */
function f104([x, y]) {}
f104([0, 1]);

function f105({ x, y }) {}
f105({ x: 0, y: 1 });

/**
 * 我们可以使用类型注解为解构参数添加类型信息。
 * 示例如下：
 */
function f106([x, y]: [number, number]) {}
f106([0, 1]);

function f107({ x, y }: { x: number; y: number }) {}
f107({ x: 0, y: 1 });
//#endregion

//#region 返回值类型
/**
 * 在函数形式参数列表之后，可以使用类型注解为函数添加返回值类型。
 * 例如，下例中定义了add函数的返回值类型为number类型：
 */
function add13(x: number, y: number): number {
  return x + y;
}

/**
 * 在绝大多数情况下，
 * TypeScript能够根据函数体内的return语句等自动推断出返回值类型，
 * 因此我们也可以省略返回值类型。
 * 示例如下：
 */
function add14(x: number, y: number) {
  return x + y;
}
/**
 * 此例中，我们没有为add函数添加返回值类型，
 * 但是TypeScript能够根据表达式“x + y”的类型推断出add函数的返回值类型为number类型。
 */

/**
 * 在TypeScript的原始类型里有一个特殊的空类型void，
 * 该类型唯一有意义的使用场景就是作为函数的返回值类型。
 * 如果一个函数的返回值类型为void，那么该函数只能返回undefined值。
 * 这意味着函数明确地返回了一个undefined值，或者函数没有调用return语句，
 * 在这种情况下函数默认返回undefined值。
 * 示例如下：
 */
// f0和f1是正确的使用场景
function f108(): void {
  return undefined;
}
function f109(): void {}

// f2, f3和f4是错误的使用场景
function f110(): void {
  return false;
}
function f111(): void {
  return 0;
}
function f112(): void {
  return "";
}

/**
 * 如果没有启用“--strictNullChecks”编译选项，
 * 那么void返回值类型也允许返回null值。
 * 示例如下：
 */
function f113(): void {
  return null;
}
//#endregion

//#region 函数类型字面量
/**
 *
 */

//#endregion

//#endregion
