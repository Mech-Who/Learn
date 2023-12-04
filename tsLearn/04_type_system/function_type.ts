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
 * 在前面几节中，介绍了如何为现有函数添加参数和返回值类型。
 * 在本节中，我们将介绍如何使用函数类型字面量来描述某个函数的类型。
 * 函数类型字面量是定义函数类型的方法之一，
 * 它能够指定函数的参数类型、返回值类型以及将在6.1节中介绍的泛型类型参数。
 * 函数类型字面量的语法与箭头函数的语法相似，具体语法如下所示：
 *
 * （ParameterList）=> Type
 *
 * 在该语法中，ParameterList表示可选的函数形式参数列表；
 * Type表示函数返回值类型；形式参数列表与返回值类型之间使用胖箭头“=>”连接。
 * 下例中，变量f的类型为函数类型，这代表变量f的值是一个函数。
 * 该函数类型通过函数类型字面量进行定义，表示一个不接受任何参数且返回值类型为void的函数。
 * 示例如下：
 */
let f200: () => void;
f200 = function () {};

/**
 * 在函数类型字面量中定义函数参数的类型时，必须包含形式参数名，
 * 不允许只声明参数的类型。下例中，add函数是正确的定义方式，
 * 而f函数则是错误的定义方式。编译器会将f函数参数列表中的number当作参数名，
 * 而不是参数类型。
 * 示例如下：
 */
let add200: (x: number, y: number) => number;
//let f202: (number) => number;
//           ^^^^^^ 编译错误

/**
 * 函数类型字面量中的形式参数名与实际函数值中的形式参数名不必相同。
 * 例如，下例中函数类型字面量中声明的形式参数名为x，而实际函数值的形式参数名为y：
 */
let f201: (x: number) => number;
f201 = function (y: number): number {
  return y;
};

/**
 * 函数类型字面量中的返回值类型必须明确指定，不允许省略。
 * 如果函数没有返回值，则需要指定void类型作为返回值类型。
 * 示例如下：
 */
let foo200: () => void;
//let bar200: () => ; //编译错误：未指定返回值类型
//#endregion

//#region 调用签名
/**
 * 函数在本质上是一个对象，但特殊的地方在于函数是可调用的对象。
 * 因此，可以使用对象类型来表示函数类型。若在对象类型中定义了调用签名类型成员，
 * 那么我们称该对象类型为函数类型。
 * 调用签名的语法如下所示：
 *
 * {
 *  （ParameterList）: Type;
 * }
 *
 * 在该语法中，ParameterList表示函数形式参数列表类型，
 * Type表示函数返回值类型，两者都是可选的。
 *
 * 下例中，我们使用对象类型字面量和调用签名定义了一个函数类型，
 * 该函数类型接受两个number类型的参数，并返回number类型的值：
 */
let add201: { (x: number, y: number): number };
add201 = function (x: number, y: number): number {
  return x + y;
};

/**
 * 实际上，上一节介绍的函数类型字面量完全等同于仅包含一个类型成员并且是调用签名类型成员的对象类型字面量。
 * 换句话说，函数类型字面量是仅包含单个调用签名的对象类型字面量的简写形式，如下所示：
 *
 * { ( ParameterList ): Type }
 * // 简写为：
 * ( ParameterList ) => Type
 *
 * 例如，“Math.abs()”是一个内置函数，它接受一个数字参数并返回该参数的绝对值。
 * 下面，我们分别使用函数类型字面量和带有调用签名的对象类型字面量来定义“Math.abs()”函数的类型：
 */
const abs200: (x: number) => number = Math.abs;
const abs201: { (x: number): number } = Math.abs;

abs200(-1) === abs201(-1); // true

/**
 * 函数类型字面量的优点是简洁，而对象类型字面量的优点是具有更强的类型表达能力。
 * 我们知道函数是一种对象，因此函数可以拥有自己的属性。
 * 下例中，函数f除了可以被调用以外，还提供了一个version属性：
 */
function f203(x: number) {
  console.log(x);
}

f203.version = "1.0";

f203(1); // 打印出1
f203.version; // 打印出1.0

/**
 * 若使用函数类型字面量，则无法描述string类型的version属性，因此也就无法准确地描述函数f的类型。
 * 示例如下：
 */
function f204(x: number) {
  console.log(x);
}
f204.version = "1.0";

let foo201: (x: number) => void = f;

//const version = foo201.version;
// 编译错误：'(x: number) => void' 类型上不存在 'version' 属性

/**
 * 在这种情况下，我们可以使用带有调用签名的对象类型字面量来准确地描述函数f的类型。
 * 示例如下：
 */
function f205(x: number) {
  console.log(x);
}
f205.version = "1.0";

let foo203: { (x: number): void; version: string } = f205;

const version = foo203.version; // 正确
//#endregion

//#region 构造函数类型字面量
/**
 * 在面向对象编程中，构造函数是一类特殊的函数，它用来创建和初始化对象。
 * JavaScript中的函数可以作为构造函数使用，在调用构造函数时需要使用new运算符。
 * 例如，我们可以使用内置的Date构造函数来创建一个日期对象，
 * 示例如下：
 */
const date200 = new Date();

/**
 * 构造函数类型字面量是定义构造函数类型的方法之一，
 * 它能够指定构造函数的参数类型、返回值类型以及将在6.1节中介绍的泛型类型参数。
 * 构造函数类型字面量的具体语法如下所示：
 *
 * new ( ParameterList ) => Type
 *
 * 在该语法中，new是关键字，ParameterList表示可选的构造函数形式参数列表类型，
 * Type表示构造函数返回值类型。
 *
 * JavaScript提供了一个内置的Error构造函数，它接受一个可选的message作为参数并返回新创建的Error对象。
 * 示例如下：
 */
const a200 = new Error();
const b200 = new Error("Error message.");

/**
 * 我们可以使用如下构造函数类型字面量来表示Error构造函数的类型。
 * 该构造函数有一个可选参数message并返回Error类型的对象。
 * 示例如下：
 */
let ErrorConstructor: new (message?: string) => Error;
//#endregion

//#region 构造签名
/**
 * 构造签名的用法与调用签名类似。若在对象类型中定义了构造签名类型成员，
 * 那么我们称该对象类型为构造函数类型。构造签名的语法如下所示：
 *
 * {
 *    new (ParameterList): Type
 * }
 *
 * 在该语法中，new是运算符关键字，ParameterList表示构造函数形式参数列表类型，
 * Type表示构造函数返回值类型，两者都是可选的。
 * 下例中，我们使用对象类型字面量和构造签名定义了一个构造函数类型，
 * 该构造函数接受一个string类型的参数，并返回新创建的对象：
 */
let Dog200: { new (name: string): object };

Dog200 = class {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
};

let dog200 = new Dog200("huahua");

/**
 * 此例中，Dog的类型为构造函数类型，它接受一个string类型的参数并返回object类型的值。
 * 构造函数类型字面量完全等同于仅包含一个类型成员并且是构造签名类型成员的对象类型字面量。
 * 换句话说，构造函数类型字面量是仅包含单个构造签名的对象类型字面量的简写形式，如下所示：
 *
 * { new ( ParameterList ): Type }
 * // 简写为：
 * new ( ParameterList ) => Type
 */
//#endregion

//#region 调用签名与构造签名
/**
 * 有一些函数被设计为既可以作为普通函数使用，同时又可以作为构造函数来使用。
 * 例如，JavaScript内置的“Number()”函数和“String()”函数等都属于这类函数。
 * 示例如下：
 */
const a201: number = Number(1);

const b201: Number = new Number(1);

/**
 * 若在对象类型中同时定义调用签名和构造签名，则能够表示既可以被直接调用，
 * 又可以作为构造函数使用的函数类型。示例如下：
 *
 * {
 *    new (x: number): Number;  // <- 构造签名
 *    (x: number): number;      // <- 调用签名
 * }
 *
 * 此例中，对象类型字面量定义了一个构造签名“new (x:number): Number;”，
 * 它接受一个number类型的参数，并返回Number类型的值。
 * 同时，该对象类型字面量还定义了一个调用签名“(x:number): number;”，
 * 它接受一个number类型的参数，并返回number类型的值。
 * 示例如下：
 */
declare const F: {
  new (x: number): Number; // <- 构造签名
  (x: number): number; // <- 调用签名
};

// 作为普通函数调用
const a202: number = F(1);

// 作为构造函数调用
const b202: Number = new F(1);
/**
 * 此例中，函数F的类型既是函数类型又是构造函数类型。因此，允许直接调用F函数，或者以构造函数的方式调用F函数。
 */
//#endregion

//#region 重载函数
/**
 * 重载函数是指一个函数同时拥有多个同类的函数签名。
 * 例如，一个函数拥有两个及以上的调用签名，或者一个构造函数拥有两个及以上的构造签名。
 * 当使用不同数量和类型的参数调用重载函数时，可以执行不同的函数实现代码。
 *
 * TypeScript中的重载函数与其他编程语言中的重载函数略有不同。
 * 首先，让我们看一个重载函数的例子。下例中定义了一个重载函数add。
 * 它接受两个参数，若两个参数的类型为number，则返回它们的和；
 * 若两个参数的类型为数组，则返回合并后的数组。
 * 在调用add函数时，允许使用这两个调用签名之一并且能够得到正确的返回值类型。
 * 示例如下：
 */
function add202(x: number, y: number): number;
function add202(x: any[], y: any[]): any[];
function add202(x: number | any[], y: number | any[]): number | any[] {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (Array.isArray(x) && Array.isArray(y)) {
    return [...x, ...y];
  } else {
    throw new Error("Invalid arguments.");
  }
}

const a203: number = add202(1, 2);
const b203: number[] = add202([1], [2]);

/**
 * 在使用函数声明定义函数时能够定义重载函数。重载函数的定义由以下两部分组成：
 *
 * 1. 一条或多条函数重载语句。
 * 2. 一条函数实现语句。
 *
 * 下面我们将分别介绍这两部分。
 */
//#region 函数重载
/**
 * 不带有函数体的函数声明语句叫作函数重载。例如，下例中的add函数声明没有函数体，因此它属于函数重载：
 */
//function add203(x: number, y: number): number;

/**
 * 函数重载的语法中不包含函数体，它只提供了函数的类型信息。
 * 函数重载只存在于代码编译阶段，在编译生成JavaScript代码时会被完全删除，
 * 因此在最终生成的JavaScript代码中不包含函数重载的代码。
 *
 * 函数重载允许存在一个或多个，但只有多于一个的函数重载才有意义，
 * 因为若只有一个函数重载，则可以直接定义函数实现。
 * 在函数重载中，不允许使用默认参数。函数重载应该位于函数实现（将在下一节中介绍）之前，
 * 每一个函数重载中的函数名和函数实现中的函数名必须一致。
 * 例如，下例中第1行和第2行分别定义了两个函数重载，第3行是函数实现。
 * 它们具有相同的函数名add，并且每一个函数重载都位于函数实现之前。
 * 示例如下：
 */
function add204(x: number, y: number): number;
function add204(x: any[], y: any[]): any[];
function add204(x: number | any[], y: number | any[]): number | any[] {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (Array.isArray(x) && Array.isArray(y)) {
    return [...x, ...y];
  } else {
    throw new Error("Invalid arguments.");
  }
}

/**
 * 同时需要注意，
 * 在各个函数重载语句之间以及函数重载语句与函数实现语句之间不允许出现任何其他语句，
 * 否则将产生编译错误。
 * 示例如下：
 */
function add205(x: number, y: number): number;

const a204 = 0; //编译错误

function add205(x: any[], y: any[]): any[];

const b204 = 0; // 编译错误

function add205(x: number | any[], y: number | any[]): number | any[] {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (Array.isArray(x) && Array.isArray(y)) {
    return [...x, ...y];
  } else {
    throw new Error("Invalid arguments.");
  }
}
//#endregion

//#region 函数实现
/**
 * 函数实现包含了实际的函数体代码，该代码不仅在编译时存在，
 * 在编译生成的JavaScript代码中同样存在。每一个重载函数只允许有一个函数实现，
 * 并且它必须位于所有函数重载语句之后，否则将产生编译错误。
 * 示例如下：
 */
function add206(x: number, y: number): number;
function add206(x: any[], y: any[]): any[];

// 函数实现必须位于最后
function add206(x: number | any[], y: number | any[]): number | any[] {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (Array.isArray(x) && Array.isArray(y)) {
    return [...x, ...y];
  } else {
    throw new Error("Invalid arguments.");
  }
}

/**
 * TypeScript中的重载函数最令人迷惑的地方在于，
 * 函数实现中的函数签名不属于重载函数的调用签名之一，
 * 只有函数重载中的函数签名能够作为重载函数的调用签名。
 * 例如，下例中的add函数只有两个调用签名，分别为第1行与第2行定义的两个重载签名，
 * 而第3行函数实现中的函数签名不是add函数的调用签名，
 * 如下所示：
 */
function add207(x: number, y: number): number;
function add207(x: any[], y: any[]): any[];
function add207(x: number | any[], y: number | any[]): number | any[] {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (Array.isArray(x) && Array.isArray(y)) {
    return [...x, ...y];
  } else {
    throw new Error("Invalid arguments.");
  }
}

/**
 * 因此，我们可以使用两个number类型的值来调用add函数，
 * 或者使用两个数组类型的值来调用add函数。
 * 但是，不允许使用一个number类型和一个数组类型的值来调用add函数，
 * 尽管在函数实现的函数签名中允许这种调用方式。
 * 示例如下：
 */
// 正确
add207(1, 2);
add207([1], [2]);

// 错误
add207(1, [2]);
add207([1], 2);

/**
 * 函数实现需要兼容每个函数重载中的函数签名，函数实现的函数签名类型必须能够赋值给函数重载的函数签名类型。
 * 示例如下：
 */
function foo204(x: number): boolean; // 编译错误：重载签名与实现签名的返回值类型不匹配
function foo204(x: string): void; // 编译错误：重载签名与实现签名的参数类型不匹配
// 错误，参数类型不兼容
function foo204(x: number): void {
  x = x * x;
}

/**
 * 此例中，重载函数foo可能的参数类型为number类型或string类型，
 * 同时返回值类型可能为boolean类型或void类型。
 * 因此，在函数实现中的参数x必须同时兼容number类型和string类型，
 * 而返回值类型则需要兼容boolean类型和void类型。
 * 我们可以使用联合类型来解决这些问题，
 * 示例如下：
 */
function foo205(x: number): boolean; // 编译错误：重载签名与实现签名的返回值类型不匹配
function foo205(x: string): void; // 编译错误：重载签名与实现签名的参数类型不匹配
// 错误，参数类型不兼容
function foo205(x: number): void {
  x = x * x;
}

/**
 * 在其他一些编程语言中允许存在多个函数实现，
 * 并且在调用重载函数时编程语言负责选择合适的函数实现执行。
 * 在TypeScript中，重载函数只存在一个函数实现，
 * 开发者需要在这个唯一的函数实现中实现所有函数重载的功能。
 * 这就需要开发者自行去检测参数的类型及数量，并根据判断结果去执行不同的操作。
 * 示例如下：
 */
function add208(x: number, y: number): number;
function add208(x: any[], y: any[]): any[];
function add208(x: number | any[], y: number | any[]): number | any[] {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (Array.isArray(x) && Array.isArray(y)) {
    return [...x, ...y];
  } else {
    throw new Error("Invalid arguments.");
  }
}
/**
 * TypeScript不支持为不同的函数重载分别定义不同的函数实现。
 * 从这点上来看，TypeScript中的函数重载不是特别便利。
 */
//#endregion

//#region 函数重载解析顺序
/**
 *
 */

//#endregion

//#endregion

//#endregion
