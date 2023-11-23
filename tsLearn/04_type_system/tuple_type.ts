//#region 元组类型
/**
 * 元组（Tuple）表示由有限元素构成的有序列表。
 * 在JavaScript中，没有提供原生的元组数据类型。
 * TypeScript对此进行了补充，提供了元组数据类型。
 * 由于元组与数组之间存在很多共性，因此TypeScript使用数组来表示元组。
 *
 * 在TypeScript中，元组类型是数组类型的子类型。
 * 元组是长度固定的数组，并且元组中每个元素都有确定的类型。
 */

//#region 元组的定义
/**
 * 定义元组类型的语法与定义数组字面量的语法相似，具体语法如下所示：
 *
 * [T0, T1, ...,Tn]
 *
 * 该语法中的T0、T1和Tn表示元组中元素的类型，针对元组中每一个位置上的元素都需要定义其数据类型。
 *
 * 下例中，我们使用元组来表示二维坐标系中的一个点。
 * 该元组中包含两个number类型的元素，分别表示点的横坐标和纵坐标。
 * 示例如下：
 */
const point2: [number, number] = [0, 0];

/**
 * 元组中每个元素的类型不必相同。例如，可以定义一个表示考试成绩的元组，
 * 元组的第一个元素是string类型的科目名，第二个元素是number类型的分数。
 * 示例如下：
 */
const score: [string, number] = ["math", 100];

/**
 * 元组的值实际上是一个数组，在给元组类型赋值时，数组中每个元素的类型都要与元组类型的定义保持兼容。
 * 例如，对于“[number,number]”类型的元组，它只接受包含两个number类型元素的数组。
 * 示例如下：
 */
const point3: [number, number] = [0, 0];

/**
 * 若数组元素的类型与元组类型的定义不匹配，则会产生编译错误。
 * 示例如下：
 */
let point4: [number, number];

point4 = [0, "y"]; // 编译错误
point4 = ["x", 0]; // 编译错误
point4 = ["x", "y"]; // 编译错误

/**
 * 在给元组类型赋值时，还要保证数组中元素的数量与元组类型定义中元素的数量保持一致，
 * 否则将产生编译错误。
 * 示例如下：
 */
let point5: [number, number];

point5 = [0]; // 编译错误
point5 = [0, 0, 0]; // 编译错误
//#endregion

//#region 只读元组
/**
 * 元组可以定义为只读元组，这与只读数组是类似的。
 * 只读元组类型是只读数组类型的子类型。
 * 定义只读元组有以下两种方式：
 *
 * 1. 使用readonly修饰符。
 * 2. 使用“Readonly<T>”工具类型。
 *
 * 以上两种定义只读元组的方式只是语法不同，它们在功能上没有任何差别。
 */

// readonly
/**
 * TypeScript 3.4版本中引入了一种新语法，使用readonly修饰符能够定义只读元组。
 * 在定义只读元组时，将readonly修饰符置于元组类型之前即可。
 * 示例如下：
 */
const point6: readonly [number, number] = [0, 0];
// 此例中，point6是包含两个元素的只读元组。

// Readonly<T>
/**
 * 由于TypeScript 3.4支持了使用readonly修饰符来定义只读元组，
 * 所以从TypeScript 3.4开始可以使用“Readonly<T>”工具类型来定义只读元组。
 * 示例如下：
 */
const point7: Readonly<[number, number]> = [0, 0];
//此例中，point是包含两个元素的只读元组。
//在“Readonly<T>”类型中，类型参数T的值为元组类型“[number, number]”。

// 注意事项
/**
 * 在给只读元组类型赋值时，允许将常规元组类型赋值给只读元组类型，
 * 但是不允许将只读元组类型赋值给常规元组类型。
 * 换句话说，不能通过赋值操作来放宽对只读元组的约束。
 * 示例如下：
 */
const a29: [number] = [0];
const ra29: readonly [number] = [0];
const x29: readonly [number] = a29; // 正确
const y29: [number] = ra29; // 编译错误

//#endregion

//#region 访问元组中的元素
/**
 * 由于元组在本质上是数组，所以我们可以使用访问数组元素的方法去访问元组中的元素。
 * 在访问元组中指定位置上的元素时，编译器能够推断出相应的元素类型。
 * 示例如下：
 */
const score2: [string, number] = ["math", 100];

const course = score2[0]; // string
const grade = score2[1]; // number

// const foo30: boolean = score[0];
// // 编译错误！类型 'string' 不能赋值给类型 'boolean'
// const bar30: boolean = score[1];
// // 编译错误！类型 'number' 不能赋值给类型 'boolean'

/**
 * 当访问数组中不存在的元素时不会产生编译错误。
 * 与之不同的是，当访问元组中不存在的元素时会产生编译错误。
 * 示例如下：
 */
const score3: [string, number] = ["math", 100];

const foo31 = score3[2];
// 编译错误！该元组类型只有两个元素，找不到索引为'2'的元素

/**
 * 修改元组元素值的方法与修改数组元素值的方法相同。
 * 示例如下：
 */
const point8: [number, number] = [0, 0];

point8[0] = 1;
point8[1] = 1;
//#endregion

//#region 元组类型中的可选元素
/**
 * 在定义元组时，可以将某些元素定义为可选元素。
 * 定义元组可选元素的语法是在元素类型之后添加一个问号“?”，
 * 具体语法如下所示：
 *
 * [T0?, T1?, ..., Tn?]
 *
 * 该语法中的T0、T1和Tn表示元组中元素的类型。
 *
 * 如果元组中同时存在可选元素和必选元素，那么可选元素必须位于必选元素之后，
 * 具体语法如下所示：
 *
 * [T0, T1?, ..., Tn?]
 *
 * 该语法中的T0表示必选元素的类型，T1和Tn表示可选元素的类型。
 *
 * 下例中定义了一个包含三个元素的元组tuple，其中第一个元素是必选元素，后两个元素是可选元素：
 */
const tuple: [boolean, string?, number?] = [true, "yes", 1];

/**
 * 在给元组赋值时，可以不给元组的可选元素赋值。
 * 例如，对于上例中的tuple元组，它的值可以为仅包含一个元素的数组，
 * 或者是包含两个元素的数组，再或者是包含三个元素的数组。
 * 示例如下：
 */
let tuple2: [boolean, string?, number?] = [true, "yes", 1];

tuple2 = [true];
tuple2 = [true, "yes"];
tuple2 = [true, "yes", 1];
//#endregion

//#region 元组类型中的剩余元素
/**
 * 在定义元组类型时，可以将最后一个元素定义为剩余元素。
 * 定义元组剩余元素类型的语法如下所示：
 *
 * [...T[]]
 *
 * 该语法中，元组的剩余元素是数组类型，T表示剩余元素的类型。
 *
 * 下例中，在元组tuple的定义中包含了剩余元素。
 * 其中，元组的第一个元素为number类型，其余的元素均为string类型。
 * 示例如下：
 */
const tuple3: [number, ...string[]] = [0, "a", "b"];

/**
 * 如果元组类型的定义中含有剩余元素，那么该元组的元素数量是开放的，
 * 它可以包含零个或多个指定类型的剩余元素。
 * 示例如下：
 */
let tuple4: [number, ...string[]];

tuple4 = [0];
tuple4 = [0, "a"];
tuple4 = [0, "a", "b"];
tuple4 = [0, "a", "b", "c"];
//#endregion

//#region 元组的长度
/**
 * 对于经典的元组类型，即不包含可选元素和剩余元素的元组而言，
 * 元组中元素的数量是固定的。也就是说，元组拥有一个固定的长度。
 * TypeScript编译器能够识别出元组的长度并充分利用该信息来进行类型检查。
 * 示例如下：
 */
function f10(point: [number, number]) {
  // 编译器推断出length的类型为数字字面量类型2
  const length = point.length;
  if (length === 3) {
    // 编译错误！条件表达式永远为false
    //...
  }
}
/**
 * 此例第3行，TypeScript编译器能够推断出常量length的类型为数字字面量类型2。
 * 第5行在if条件表达式中，数字字面量类型2与数字字面量类型3没有交集。
 * 因此，编译器能够分析出该比较结果永远为false。在这种情况下，编译器将产生编译错误。
 */

/**
 * 当元组中包含了可选元素时，元组的长度不再是一个固定值。
 * 编译器能够根据元组可选元素的数量识别出元组所有可能的长度，
 * 进而构造出一个由数字字面量类型构成的联合类型来表示元组的长度。
 * 示例如下：
 */
const tuple5: [boolean, string?, number?] = [true, "yes", 1];

let len = tuple5.length; // 1 | 2 | 3

len = 1;
len = 2;
len = 3;
len = 4; // 编译错误！类型'4'不能赋值给类型'1 | 2 | 3'

/**
 * 此例第1行，元组tuple中共包含3个元素，其中第一个元素是必选元素，
 * 后面两个元素是可选元素，元组tuple中可能的元素数量为1、2或3个。
 * TypeScript编译器能够推断出此信息并构造出联合类型“1 |2 | 3”作为该元组length属性的类型。
 *
 * 第5、6、7行，允许将数字1、2和3赋值给len变量。
 * 第9行，不允许将数字4赋值给len变量，
 * 因为数字字面量类型4与联合类型“1 | 2| 3”不兼容。
 *
 * 若元组类型中定义了剩余元素，那么该元组拥有不定数量的元素。
 * 因此，该元组length属性的类型将放宽为number类型。
 * 示例如下：
 */
const tuple6: [number, ...string[]] = [0, "a"];

const len = tuple6.length; // number
//#endregion

//#region 元组类型与数组类型的兼容性
/**
 * 前文提到过，元组类型是数组类型的子类型，只读元组类型是只读数组类型的子类型。
 * 在进行赋值操作时，允许将元组类型赋值给类型兼容的元组类型和数组类型。
 * 示例如下：
 */
const point9: [number, number] = [0, 0];

const nums9: number[] = point9; // 正确

const strs9: string[] = point9; // 编译错误

/**
 * 此例中，元组point的两个元素都是number类型，
 * 因此允许将point赋值给number数组类型，
 * 而不允许将point赋值给string数组类型。
 *
 * 元组类型允许赋值给常规数组类型和只读数组类型，
 * 但只读元组类型只允许赋值给只读数组类型。
 * 示例如下：
 */
const t30: [number, number] = [0, 0];
const rt30: readonly [number, number] = [0, 0];

let a30: number[] = t30;

let ra30: readonly number[];
ra30 = t30;
ra30 = rt30;

/**
 * 由于数组类型是元组类型的父类型，因此不允许将数组类型赋值给元组类型。
 * 示例如下：
 */
const nums10: number[] = [0, 0];

let point10: [number, number] = nums;
// 编译错误
//#endregion

//#endregion
