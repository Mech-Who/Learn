//#region 对象类型
/**
 * 在JavaScript中存在这样一种说法，那就是“一切皆为对象”。
 * 有这种说法是因为JavaScript中的绝大多数值都可以使用对象来表示。
 * 例如，函数、数组和对象字面量等本质上都是对象。
 * 对于原始数据类型，如String类型，
 * JavaScript也提供了相应的构造函数来创建能够表示原始值的对象。
 * 例如，下例中使用内置的String构造函数创建了一个表示字符串的对象，
 * 示例如下：
 */
const hi = new String("hi");

/**
 * 在某些操作中，原始值还会自动地执行封箱[1]操作，将原始数据类型转换为对象数据类型。
 * 例如，在字符串字面量上直接调用内置的“toUpperCase()”方法时，
 * JavaScript会先将字符串字面量转换为对象类型，然后再调用字符串对象上的“toUpperCase()”方法。
 * 示例如下：
 */
// 自动封箱，将'hi'转换为String对象类型
"hi".toUpperCase();

// 自动封箱，将3转换为Number对象类型
// 注意：这里使用了两个点符号
(3).toString();

/**
 * 前面已经介绍过的数组类型、元组类型以及后面章节中将介绍的函数类型、接口等都属于对象类型。
 * 由于对象类型的应用非常广泛，因此TypeScript提供了多种定义对象类型的方式。
 * 在本节中，我们将首先介绍三种基本的对象类型：
 *
 * 1. Object类型（首字母为大写字母O）
 * 2. object类型（首字母为小写字母o）
 * 3. 对象类型字面量
 *
 * 在后面的章节中，我们会陆续介绍定义对象类型的其他方式。
 *
 * 封箱的英文为boxing，指将原始值包装在一个对象中的过程。
 * 在执行了封箱操作后就能像使用对象一样使用原始数据类型。
 */

//#region Object
/**
 * 这里的Object指的是Object类型，而不是JavaScript内置的“Object()”构造函数。
 * 请读者一定要注意区分这两者，Object类型表示一种类型，而“Object()”构造函数则表示一个值。
 * 因为“Object()”构造函数是一个值，因此它也有自己的类型。
 * 但要注意的是，“Object()”构造函数的类型不是Object类型。
 * 为了更好地理解Object类型，让我们先了解一下“Object()”构造函数。
 *
 * JavaScript提供了内置的“Object()”构造函数来创建一个对象。
 * 示例如下：
 */
const obj2 = new Object();

/**
 * 在实际代码中，使用“Object()”构造函数来创建对象的方式并不常用。
 * 在创建对象时，我们通常会选择使用更简洁的对象字面量。
 * 虽然不常使用“Object()”构造函数来创建对象，
 * 但是“Object()”构造函数提供了一些非常常用的静态方法，
 * 例如“Object.assign()”方法和“Object.create()”方法等。
 *
 * 接下来，让我们深入分析一下TypeScript源码中对“Object()”构造函数的类型定义。
 * 下面仅摘取一部分着重关注的类型定义：
 */
interface ObjectConstructor {
  readonly prototype: Object;
  // 省略了其他成员
}

declare var Object: ObjectConstructor;

/**
 * 由该定义能够直观地了解到“Object()”构造函数的类型是ObjectConstructor类型而不是Object类型，
 * 它们是不同的类型。第3行，prototype属性的类型为Object类型。
 * 构造函数的prototype属性值决定了实例对象的原型。
 * 此外，“Object.prototype”是一个特殊的对象，它是JavaScript中的公共原型对象。
 * 也就是说，如果程序中没有刻意地修改一个对象的原型，
 * 那么该对象的原型链上就会有“Object.prototype”对象，
 * 因此也会继承“Object.prototype”对象上的属性和方法。
 *
 * 现在，我们可以正式地引出Object类型。
 * Object类型是特殊对象“Object.prototype”的类型，
 * 该类型的主要作用是描述JavaScript中几乎所有对象都共享（通过原型继承）的属性和方法。
 * Object类型的具体定义如下所示（取自TypeScript源码）：
 */
interface Object {
  /**
   * The initial value ofObject.prototype.constructor
   * is the standard built-in Object constructor.
   */
  constructor: Function;

  /**
   * Returns a string representation of an object.
   */
  toString(): string;

  /**
   * Returns a date converted to a string using the current locale.
   */
  toLocaleString(): string;

  /**
   * Returns the primitive value of the specified object.
   */
  valueOf(): Object;

  /**
   * Determines whether an object has a property with the specified name.
   * @param v A property name.
   */
  hasOwnProperty(v: PropertyKey): boolean;

  /**
   * Determines whether an object exists in another object's prototype chain.
   */
  isPrototypeOf(v: Object): boolean;

  /**
   * Determines whether a specified property isenumerable.
   * @param v A property name.
   */
  propertyIsEnumerable(v: PropertyKey): boolean;
}
/**
 * 通过该类型定义能够了解到，Object类型里定义的方法都是通用的对象方法，如“valueOf()”方法。
 */

// 类型兼容性
/**
 * Object类型有一个特点，那就是除了undefined值和null值外，
 * 其他任何值都可以赋值给Object类型。
 * 示例如下：
 */
let obj3: Object;

// 正确
obj3 = { x: 0 };
obj3 = true;
obj3 = "hi";
obj3 = 1;

// 编译错误
obj3 = undefined;
obj3 = null;

/**
 * 对象能够赋值给Object类型是理所当然的，但为什么原始值也同样能够赋值给Object类型呢？
 * 实际上，这样设计正是为了遵循JavaScript语言的现有行为。
 * 我们在本章开篇处介绍了 JavaScript语言中存在自动封箱操作。
 * 当在原始值上调用某个方法时，JavaScript会对原始值执行封箱操作，
 * 将其转换为对象类型，然后再调用相应方法。Object类型描述了所有对象共享的属性和方法，而
 * JavaScript允许在原始值上直接访问这些方法，因此TypeScript允许将原始值赋值给Object类型。
 * 示例如下：
 */
"str".valueOf();

const str: Object = "str";
str.valueOf();

// 常见错误
/**
 * 在使用Object类型时容易出现的一个错误是，
 * 将Object类型应用于自定义变量、参数或属性等的类型。
 * 示例如下：
 */
const point11: Object = { s: 0, y: 0 };

/**
 * 此例中，将常量point的类型定义为Object类型。
 * 虽然该代码不会产生任何编译错误，但它是一个明显的使用错误。
 * 原因刚刚介绍过，Object类型的用途是描述“Object.prototype”对象的类型，
 * 即所有对象共享的属性和方法。在描述自定义对象类型时有很多更好的选择，
 * 完全不需要使用Object类型，例如接下来要介绍的object类型和对象字面量类型等。
 * 在TypeScript官方文档中也明确地指出了不应该使用Object类型，
 * 而是应该使用object类型来代替。
 *
 * 官方文档对此的说明可参见
 * https://www.typescriptlang.org/docs/handbook/declaration-files
 * /do-s-and-don-ts.html#number-string-boolean-symbol-and-object。
 */
//#endregion

//#region object
/**
 * 在TypeScript 2.2版本中，增加了一个新的object类型表示非原始类型。
 * object类型使用object关键字作为标识，object类型名中的字母全部为小写。
 * 示例如下：
 */
const point12: object = { x: 0, y: 0 };

/**
 * object类型的关注点在于类型的分类，它强调一个类型是非原始类型，即对象类型。
 * object类型的关注点不是该对象类型具体包含了哪些属性，
 * 例如对象类型是否包含一个名为name的属性，因此，不允许读取和修改object类型上的自定义属性。
 * 示例如下：
 */
const obj4: object = { foo: 0 };

// 编译错误！属性'foo'不存在于类型'object'上
obj4.foo;
// 编译错误！属性'foo'不存在于类型'object'上
obj4.foo = 0;

/**
 * 在object类型上仅允许访问对象的公共属性和方法，也就是Object类型中定义的属性和方法。
 * 示例如下：
 */
const obj5: object = {};

obj5.toString();
obj5.valueOf();

// 类型兼容性
/**
 * 我们知道，JavaScript中的数据类型可以划分为原始数据类型和对象数据类型两大类。
 * 针对JavaScript中的每一种原始数据类型，TypeScript都提供了对应的类型：
 *
 * 1. boolean
 * 2. string
 * 3. number
 * 4. bigint
 * 5. symbol
 * 6. undefined
 * 7. null
 *
 * 但是在以前的版本中，TypeScript唯独没有提供一种类型用来表示非原始类型，也就是对象类型。
 * 上一节介绍的Object类型无法表示非原始类型，因为允许将原始类型赋值给Object类型。
 * 例如，将字符串赋值给Object类型不会产生错误。
 * 示例如下：
 */
const a23: Object = "hi";

/**
 * 新的object类型填补了这个功能上的缺失。
 * object类型能够准确地表示非原始类型，
 * 因为原始类型不允许赋给object类型。
 * 示例如下：
 */
let nonPrimitive: object;

// 下列赋值语句均会产生编译错误
nonPrimitive = true;
nonPrimitive = "hi";
nonPrimitive = 1;
nonPrimitive = 1n;
nonPrimitive = Symbol();
nonPrimitive = undefined;
nonPrimitive = null;

/**
 * 只有非原始类型，也就是对象类型能够赋给object类型。
 * 示例如下：
 */
let nonPrimitive2: object;

// 正确
nonPrimitive2 = {};
nonPrimitive2 = { x: 0 };
nonPrimitive2 = [0];
nonPrimitive2 = new Date();
nonPrimitive2 = function () {};

/**
 * object类型仅能够赋值给以下三种类型：
 *
 * 1. 顶端类型any和unknown
 * 2. Object类型
 * 3. 空对象类型字面量“{}”
 *
 * 由于所有类型都是顶端类型的子类型，
 * 所以object类型能够赋值给顶端类型any和unknown。
 * 示例如下：
 */
const nonPrimitive3: object = {};

const a24: any = nonPrimitive3;
const b24: unknown = nonPrimitive3;

/**
 * Object类型描述了所有对象都共享的属性和方法，
 * 所以很自然地表示对象类型的object类型能够赋值给Object类型。
 * 示例如下：
 */
const nonPrimitive4: object = {};
const obj6: Object = nonPrimitive4;

/**
 * object类型也能够赋值给空对象类型字面量“{}”。
 * 我们将在5.11.3节中介绍空对象类型字面量。
 * 示例如下：
 */
const nonPrimitive5: object = {};
const obj7: {} = nonPrimitive5;

// 实例应用
/**
 * 在JavaScript中，有一些内置方法只接受对象作为参数。
 * 例如，我们前面提到的“Object.create()”方法，
 * 该方法的第一个参数必须传入对象或者null值作为新创建对象的原型。
 * 如果传入了原始类型的值，例如数字1，那么将产生运行时的类型错误。
 * 示例如下：
 */
// 正确
const a25 = Object.create(Object.prototype);
const b25 = Object.create(null);

// 类型错误
const c25 = Object.create(1);

/**
 * 在没有引入object类型之前，没有办法很好地描述“Object.create()”方法签名的类型。
 * TypeScript也只好将该方法第一个参数的类型定义为any类型。
 * 如此定义参数类型显然不够准确，而且对类型检查也没有任何帮助。
 * 示例如下：
 */
interface ObjectConstructor {
    create(o: any, ...): any;

    // 省略了其他成员
}

/**
 * 在引入了object类型之后，
 * TypeScript更新了“Object.create()”方法签名的类型，
 * 使用object类型来替换any类型。
 * 示例如下：
 */
interface ObjectConstructor {
    create(o: object | null, ...): any;
    
    // 省略了其他成员
}

/**
 * 现在，我们能够正确描述“Object.create()”方法的参数类型。
 * 如果传入了原始类型的参数，编译器在进行静态类型检查时就能够发现这个错误。
 * 示例如下：
 */
const a26 = Object.create(1);
// 编译错误

//#endregion

//#region 对象类型字面量
/**
 * 对象类型字面量是定义对象类型的方法之一。
 * 下例中，我们使用对象类型字面量定义了一个对象类型。
 * 该对象类型中包含了两个属性成员x和y，它们的类型均为number类型。
 * 示例如下：
 */
const point13: { x: number; y: number } = { x: 0, y: 0};

//#region 基础语法
/**
 * 对象类型字面量的语法与对象字面量的语法相似。
 * 在定义对象类型字面量时，需要将类型成员依次列出。
 * 对象类型字面量的语法如下所示：
 * {
 *   TypeMember;
 *   TypeMember;
 *   ...
 * }
 * 在该语法中，TypeMember表示对象类型字面量中的类型成员，
 * 类型成员置于一对大括号“{}”之内。
 * 
 * 在各个类型成员之间，不但可以使用分号“;”进行分隔，
 * 还可以使用逗号“,”进行分隔，这两种分隔符不存在功能上的差异。
 * 示例如下：
 * {
 *   TypeMember,
 *   TypeMember,
 *   ...
 * }
 * 
 * 类型成员列表中的尾后分号和尾后逗号是可选的。
 * 示例如下：
 * 
 * {
 *   TypeMember;
 *   TypeMember;
 * }
 * 
 * {
 *   TypeMember;
 *   TypeMember
 * }
 */

/**
 * 对象类型字面量的类型成员可分为以下五类：
 * 
 * 1. 属性签名
 * 2. 调用签名
 * 3. 构造签名
 * 4. 方法签名
 * 5. 索引签名
 * 
 * 下面我们将以属性签名为例来介绍对象类型字面量的使用方法，
 * 其他种类的类型成员将在5.12节和5.13节中进行详细介绍。
 */
//#endregion

//#region 属性签名
/**
 * 属性签名声明了对象类型中属性成员的名称和类型。
 * 它的语法如下所示：
 * 
 * {
 *   PropertyName: Type;
 * }
 * 
 * 在该语法中，PropertyName表示对象属性名，
 * 可以为标识符、字符串、数字和可计算属性名；
 * Type表示该属性的类型。
 * 
 * 下例中，我们使用对象类型字面量定义了Point对象类型，
 * 该类型表示二维坐标系中的点。Point对象类型包含两个属性签名类型成员，
 * 分别为表示横坐标的属性x和表示纵坐标的属性y，
 * 两者的类型均为number类型。
 * 示例如下：
 */
let point14: { x: number; y: number } = { x: 0, y: 0 };

/**
 * 属性签名中的属性名可以为可计算属性名，
 * 但需要该可计算属性名满足以下条件之一：
 * 
 * 1. 可计算属性名的类型为string字面量类型或number字面量类型.示例如下：
 */
const a31: 'a' = 'a';
const b31: 0 = 0;

let obj8: {
  [a31]: boolean;
  [b31]: boolean;

  ['c']: boolean;
  [1]: boolean;
};

/**
 * 2. 计算属性名的类型为“unique symbol”类型。示例如下:
 */
const s: unique symbol = Symbol();

let obj9: {
  [s]: boolean;
};

/**
 * 3. 可计算属性名符合“Symbol.xxx”的形式。示例如下：
 */
let obj10: {
  [Symbol.toStringTag]: string;
};

/**
 * 在属性签名的语法中，表示类型的Type部分是可以省略的，
 * 允许只列出属性名而不定义任何类型。在这种情况下，
 * 该属性的类型默认为any类型。
 * 示例如下：
 */
{
  x;
  y;
}
// 等同于
{
  x: any;
  y: any;
}
/**
 * 注意，此例中的代码仅在没有启用“--noImplicitAny”编译选项的情况下才能够正常编译。
 * 若启用了“--noImplicitAny”编译选项，则会产生编译错误，
 * 因为对象属性隐式地获得了any类型。
 * 示例如下：
 * 
 * 01 {
 * 02     x;
 * 03 //  ~
 * 04 //  编译错误！成员 'x' 隐式地获得了 'any' 类型
 * 05 }
 * 
 * 在程序中，不推荐省略属性签名中的类型。
 */
//#endregion

//#region 可选属性
/**
 * 在默认情况下，通过属性签名定义的对象属性是必选属性。
 * 如果在属性签名中的属性名之后添加一个问号“?”，
 * 那么将定义一个可选属性。
 * 定义可选属性成员的语法如下所示：
 * 
 * {
 * 	 PropertyName?: Type;
 * }
 * 
 * 在给对象类型赋值时，可选属性可以被忽略。
 * 下例中，我们修改了前面定义的Point对象类型，
 * 添加一个可选属性z来表示点的Z轴坐标。
 * 这样Point对象类型也能够表示三维坐标系中的点。
 * 示例如下：
 */
let point15: {x: number; y: number; z?: number};
// Point对象类型

point15 = { x: 0, y: 0 };
point15 = { x: 0, y: 0, z: 0 };

/**
 * 此例中，Point对象类型的属性z是可选属性。
 * 在给point变量赋值时，既可以为属性z赋予一个number类型的值，
 * 也可以完全忽略属性z。
 * 
 * 在“--strictNullChecks”模式下，
 * TypeScript会自动在可选属性的类型定义中添加unde-fined类型。
 * 因此，下例中两个Point对象类型的定义是等价的：
 */
{
  x: number;
  y: number;
  z?: number;
}
// 等同于
{
  x: number;
  y: number;
  z?: number | undefined;
}

/**
 * 该行为的结果是，我们可以为可选属性传入undefined值来明确地表示忽略该属性的值，
 * 示例如下：
 */
let point16: { x: number; y: number; z?: number };

point16 = { x: 0, y: 0 };
point16 = { x: 0, y: 0, z: undefined };
point16 = { x: 0, y: 0, z: 0 };

/**
 * 同时也要注意，在“--strictNullChecks”模式下，
 * null类型与undefined类型是区别对待的。
 * 此例中，不允许给属性z赋予null值，
 * 如下所示：
 */
let point17: { x: number; y: number; z?: number };

point17 = { 
            x: 0,
            y: 0,
            z: null
            // 编译错误！类型“null”不能赋值给类型“number | undefined”。
          };

/**
 * 在非“--strictNullChecks”模式下，
 * null值与undefined值均可以赋值给可选属性。
 * 因为在该模式下，null值与undefined值几乎可以赋值给任意类型。
 * 
 * 在操作对象类型的值时，只允许读写对象类型中已经定义的必选属性和可选属性。
 * 若访问了未定义的属性，则会产生编译错误。
 * 例如，下例中point的类型里没有定义属性t，因此不允许读写属性t：
 */
let point18: { x: number, y:number; z?: number };

// 正确
point18 = { x: 0, y: 0 };
point18.x;
point18.y;

// 正确
point18 = { x: 0, y: 0, z: 0 };
point18.x;
point18.y;
point18.z;

// 错误
point18 = { x: 0, y: 0, z: 0, t: 0 };
point18.t;
//#endregion

//#region 只读属性
/**
 * 在属性签名定义中添加readonly修饰符能够定义对象只读属性。
 * 定义只读属性的语法如下所示：
 * 
 * {
 *   redonly PropertyName: Type;
 * }
 * 
 * 下例中，我们将Point对象类型中的属性x和属性y定义为只读属性：
 */
let point19: {
  readonly x: number;
  readonly y: number;
};

point19 = { x: 0, y: 0 };

/**
 * 只读属性的值在初始化后不允许再被修改，
 * 示例如下：
 */
let point20: {
  readonly x: number;
  readonly y: number;
};

point20 = { x: 0, y: 0 };

// 编译错误，不允许赋值，因为是只读属性
point20.x = 1;
point20.y = 1;
//#endregion

//#region 空对象类型字面量
/**
 * 如果对象类型字面量没有定义任何类型成员，
 * 那么它就成了一种特殊的类型，即空对象类型字面量“{}”。
 * 空对象类型字面量表示不带有任何属性的对象类型，
 * 因此不允许在“{}”类型上访问任何自定义属性。
 * 示例如下：
 */
const point21: {} = { x: 0, y: 0 };

// 编译错误，因为属性不存在于类型 '{}'
point21.x;
point21.y;

/**
 * 在空对象类型字面量“{}”上，允许访问对象公共的属性和方法，
 * 也就是Object类型上定义的方法和属性。
 * 示例如下：
 */
const point22: {} = { x: 0, y: 0 };

point22.valueOf();

/**
 * 现在，读者可能会发现空对象类型字面量“{}”与Object类型十分相似。
 * 而事实上也正是如此，单从行为上来看两者是可以互换使用的。
 * 例如，除了undefined值和null值外，
 * 其他任何值都可以赋值给空对象类型字面量“{}”和Object类型。
 * 同时，空对象类型字面量“{}”和Object类型之间也允许互相赋值。
 * 示例如下：
 */
let a32: Object = 'hi';
let b32: {} = 'hi';

a = b;
b = a;

/**
 * 两者的区别主要在于语义上。
 * 全局的Object类型用于描述对象公共的属性和方法，
 * 它相当于一种专用类型，因此程序中不应该将自定义变量、
 * 参数等类型直接声明为Object类型。
 * 空对象类型字面量“{}”强调的是不包含属性的对象类型，
 * 同时也可以作为Object类型的代理来使用。
 * 最后，也要注意在某些场景中新的object类型可能是更加合适的选择。
 */
//#endregion

//#endregion

//#region 弱类型
/**
 * 弱类型（Weak Type）是TypeScript 2.4版本中引入的一个概念。
 * 弱类型指的是同时满足以下条件的对象类型：
 * 
 * 1. 对象类型中至少包含一个属性。
 * 2. 对象类型中所有属性都是可选属性。
 * 3. 对象类型中不包含字符串索引签名、数值索引签名、调用签名和构造签名（详细介绍请参考5.13节）。
 * 
 * 例如，下例中config变量的类型是一个弱类型：
 */
let config: {
  url?: string;
  async?: boolean;
  timeout?: number;
};
//#endregion

//#region 多余属性
/**
 * 对象多余属性可简单理解为多出来的属性。
 * 多余属性会对类型间关系的判定产生影响。
 * 例如，一个类型是否为另一个类型的子类型或父类型，
 * 以及一个类型是否能够赋值给另一个类型。
 * 显然，多余属性是一个相对的概念，
 * 只有在比较两个对象类型的关系时谈论多余属性才有意义。
 * 
 * 假设存在源对象类型和目标对象类型两个对象类型，
 * 那么当满足以下条件时，我们说源对象类型相对于目标对象类型存在多余属性，
 * 具体条件如下：
 * 
 * 1. 源对象类型是一个“全新（Fresh）的对象字面量类型”。
 * 2. 源对象类型中存在一个或多个在目标对象类型中不存在的属性。
 * 
 * “全新的对象字面量类型”指的是由对象字面量推断出的类型，如下所示。
 * const point: {x: number; y: number} = { x: 0, y: 0 };
 *                    类型注解               类型推断
 *                对象类型字面量           全新的对象字面量类型
 *             { x: number; y: number }   { x: 0; y: 0 }
 * 
 * 此例中，由赋值语句右侧的对象字面量“{ x: 0, y: 0 }”推断出的类型为
 * 全新的对象字面量类型“{ x: 0, y: 0 }”。同时也要注意区分，
 * 赋值语句左侧类型注解中的“{ x: number, y: number }”不是全新的对象字面量类型。
 * 如果我们将赋值语句右侧的类型视作源对象类型，将赋值语句左侧的类型视作目标对象类型，
 * 那么不存在多余属性。
 * 
 * 我们对这段代码稍加修改，如下所示：
 */
const point23: { x: number; y: number } = { 
  x: 0, 
  y: 0, 
  z: 0
  // z是多余属性
};

/**
 * 我们为赋值语句右侧的对象字面量增加了一个z属性。
 * 这时，赋值语句右侧的类型仍为全新的对象字面量类型。
 * 若仍将“{ x: number,y: number }”视为目标对象类型，
 * 那么源对象类型“{ x: 0, y: 0,z: 0 }”存在一个多余属性z。
 * 
 * 目标对象类型中的可选属性与必选属性是被同等对待的。
 * 例如，下例中point的类型为弱类型，
 * 而赋值语句右侧源类型中的属性z仍然是多余属性：
 */
const point24: { x?: number; y?: number } = { 
  x: 0, 
  y: 0, 
  z: 0
  // z是多余属性
};

//#region 多余属性检查
/**
 * 多余属性检查是TypeScript 1.6引入的功能。
 * 多余属性会影响类型间的子类型兼容性以及赋值兼容性，
 * 也就是说编译器不允许在一些操作中存在多余属性。
 * 例如，将对象字面量赋值给变量或属性时，
 * 或者将对象字面量作为函数参数来调用函数时，
 * 编译器会严格检查是否存在多余属性。
 * 若存在多余属性，则会产生编译错误。
 * 示例如下：
 */
let point25: { 
  x: number; 
  y: number 
} = { x: 0, y: 0, z: 0};
// 编译错误！z是多余属性

function f2(point: {x: number; y: number}) {}
f2({ x: 0, y: 0, z:0});
// 编译错误！z是多余属性

/**
 * 此例第4行的赋值语句中，属性z是多余属性，
 * 因此编译器不允许该赋值操作并产生编译错误。
 * 同理，在第9行的函数调用语句中，属性z是多余属性，
 * 编译器也会产生编译错误。
 * 
 * 在了解了多余属性检查的基本原理之后，
 * 让我们来思考一下它背后的设计意图。
 * 在正常的使用场景中，如果我们直接将一个对象字面量赋值给某个确定类型的变量，
 * 那么通常没有理由去故意添加多余属性。
 * 考虑如下代码：
 */
const point26: { x: number; y: number } = { 
  x: 0, 
  y: 0, 
  z: 0,
  // z是多余属性
};

/**
 * 此例中明确定义了常量point的类型是只包含两个属性x和y的对象类型。
 * 在使用对象字面量构造该类型的值时，自然而然的做法是构造一个完全符合该类型定义的值，
 * 即只包含两个属性x和y的对象，完全没有理由再添加多余的属性。
 * 
 * 我们再看一个函数调用的场景，如下所示：
 */
function f7(point: { x: number; y: number }) {
  point;
}

f7({ x: 0, y: 0, z: 0 });
// 编译错误！z是多余属性

/**
 * 此例中，函数参数point的类型为“{ x: number; y: number}”。
 * 第5行，调用函数f时传入的对象字面量带有多余属性z，这很可能是一个误操作。
 * 
 * 让我们再换一个角度，从类型可靠性的角度来看待多余属性检查。
 * 当把对象字面量赋值给目标对象类型时，若存在多余属性，
 * 那么将意味着对象字面量本身的类型彻底丢失了，如下所示。
 * const point: { x: number; y: number } = { x: 0, y: 0; z:0 }
 *                                             类型推断
 *                            类型丢失 -->  全新的对象字面量类型
 *                                         { x: 0, y: 0; z:0 }
 * 
 * 此例中，将包含多余属性的对象字面量赋值给类型为“{ x:number; y: number }”的point常量后，
 * 程序中就再也无法引用对象字面量“{ x: 0, y: 0, z: 0 }”的类型了。从类型系统的角度来看，
 * 该赋值操作造成了类型信息的永久性丢失，因此编译器认为这是一个错误。
 * 
 * 多余属性检查能够带来的最直接的帮助是发现属性名的拼写错误。
 * 示例如下：
 */
const task: { canceled?: boolean } = { cancelled: true };
// 编译错误！对象字面量只允许包含已知属性, 
// 'cancelled' 不存在于 '{ canceled?: boolean | undefined }'类型 中
// 是否指的是'canceled'属性

/**
 * 此例中，常量task的类型为“{ canceled?: boolean }”。
 * 其中，canceled属性是可选属性，因此允许不设置该属性的值。
 * 
 * 在赋值语句右侧的“{ cancelled: true }”对象字面量中，
 * 只包含一个cancelled属性。仔细查看该代码会发现，
 * 对象字面量“{cancelled: true }”与“{ canceled?: boolean }”类型中的属性名拼写相差了一个字母“l”。
 * 如果编译器不进行多余属性检查，那么此例中的代码不会产生编译错误。
 * 更糟糕的是，常量task中的canceled属性没有按照预期被设置为true，而是使用默认值undefined。
 * undefined是一个“假”值，它与想要设置的true正好相反。
 * 这就给程序注入了一个让人难以察觉的错误。
 * 
 * 如果编译器能够执行多余属性检查，那么它能够识别出对象字面量中的cancelled属性是一个多余属性，
 * 从而产生编译错误。更好的是，编译器不但能够提示多余属性的错误，
 * 还能够根据“Levenshteindistance”[1]算法来推测可能的属性名。
 * 这也是为什么在第5行中，编译器能够提示出“是否指的是'canceled'属性?”这条消息。
 */

//#region 允许多余属性
/**
 * 在前文中，我们介绍了什么是多余属性以及为什么要进行多余属性检查。
 * 多余属性检查在绝大多数场景中都是合理的，因此推荐在程序中尽可能地利用这个功能。
 * 但如果确定不想让编译器对代码进行多余属性检查，那么有多种方式能够实现这个效果。
 * 接下来，让我们以如下的代码为例来介绍每一种方法：
 */
const point27: { x: number } = { x: 0, y: 0};
// y是多余属性

/**
 * 能够忽略多余属性检查的方法如下：
 * 
 * 1. 使用类型断言，这是推荐的方法。
 * 
 * 类型断言能够对类型进行强制转换
 * 例如，我们可以将对象字面量“{x: 0, y: 0 }”的类型强制转换为“{ x: number }”类型。
 * 关于类型断言的详细介绍请参考6.10节。类型断言能够绕过多余属性检查的真正原因是，
 * 处于类型断言表达式中的对象字面量将不再是“全新的对象字面量类型”，
 * 因此编译器也就不会对其进行多余属性检查，下例中的第5行代码能够证明这一点：
 */
// 无编译错误
const p0: { x: number } = ({x: 0, y: 0} as { x: number });
const p1: { x: number } = ({x: 0, y: 0} as { x: 0; y: 0 });

/** 
 * 2. 启用“--suppressExcessPropertyErrors”编译选项。
 * 
 * 启用该编译选项能够完全禁用整个TypeScript工程的多余属性检查，
 * 但同时也将完全失去多余属性检查带来的帮助。
 * 我们可以在tsconfig.json配置文件中或命令行上启用该编译选项。
 * 关于配置文件的详细介绍请参考8.3节。
 * 示例如下：
 * {
 *   "compilerOptions": {
 *        "suppressExcessPropertyErrors": true
 *    }
 * }
 */

/**
 * 3. 使用“// @ts-ignore”注释指令。
 * 
 * 该注释指令能够禁用针对某一行代码的类型检查。
 * 关于注释指令的详细介绍请参考8.5.2节。
 * 示例如下：
 */
// @ts-ignore
const point28: { x: number } = { x: 0, y: 0 };

/**
 * 4. 为目标对象类型添加索引签名。
 * 
 * 若目标对象类型上存在索引签名，那么目标对象可以接受任意属性，
 * 因此也就谈不上多余属性。关于索引签名的详细介绍请参考5.13.6节。
 * 示例如下：
 */
const point29: {
  x: number;
  [prop: string]: number; // 索引签名
} = { x: 0, y: 0 };

/**
 * 5. 最后一种方法也许不是很好理解。
 * 
 * 如果我们先将对象字面量赋值给某个变量，然后再将该变量赋值给目标对象类型，
 * 那么将不会执行多余属性检查。这种方法能够生效的原理与类型断言类似，
 * 那就是令源对象类型不为“全新的对象字面量类型”，于是编译器将不执行多余属性检查。
 * 下面代码的第4行，赋值语句右侧不是对象字面量，而是一个标识符，
 * 因此temp的类型不是“全新的对象字面量类型”：
 */
const temp = { x: 0, y: 0 };

// 无编译错误
const point30: { x: number } = temp;

/**
 * 注：
 * Levenshtein distance，可译作“莱文斯坦距离”，是编辑距离的一种。
 * 它能够表示在两个字符串之间，由一个字符串转换为另一个字符串所需的最少编辑次数。
 * 该算法的典型应用场景是拼写检查工具、diff差异比较工具等。
 */
//#endregion

//#endregion

//#endregion

//#endregion
