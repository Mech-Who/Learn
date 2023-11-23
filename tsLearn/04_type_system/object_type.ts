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
 * 
 */

//#endregion

//#endregion
