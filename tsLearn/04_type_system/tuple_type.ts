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

//#endregion
