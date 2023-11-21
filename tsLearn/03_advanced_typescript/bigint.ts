//#region BigInt

/**
 * BigInt是在2019年9月被正式纳入ECMAScript标准中的特性。
 * 虽然BigInt不是频繁使用的特性，
 * 但其特殊性在于它是一种新的原始数据类型，
 * 同时又属于数值类型的一种。
 * 由于BigInt类型的加入，JavaScript中共支持两种数值类型，
 * 即Number类型和BigInt类型。
 */

/**
 * 目前，JavaScript语言中共有以下七种原始数据类型：
 *
 * Undefined
 * Null
 * Boolean
 * String
 * Symbol
 * Number
 * BigInt
 *
 * JavaScript语言使用双精度64位浮点数格式来表示Number类型的值。
 * Number类型能够安全表示的最大整数为2^53 - 1，
 * 该数值能够使用内置的Number对象上的MAX_SAFE_INTEGER属性来表示
 *
 * 。BigInt类型能够表示任意精度的整数，尤其是大于2^53 - 1的整数，
 * 这也正是引入BigInt类型的原因。
 */

//#region 创建BigInt

/**
 * 我们可以使用以下两种方式来创建BigInt类型的值：
 * 1. 使用BigInt字面量。
 * 2. 使用BigInt()函数。
 * BigInt字面量的语法是在一个整数后面添加一个小写字母“n”。
 * 字母“n”必须紧随数字之后，两者之间不允许存在空白字符。
 * 示例如下：
 */
const unit_1 = 1n;

/**
 * 使用BigInt()函数也能够创建BigInt类型的值。
 * BigInt()函数会尝试将传入的参数转换为BigInt，
 * 最基本的使用场景是将一个整数转换为BigInt类型的值。
 * 示例如下：
 */
const unit_2 = BigInt(1);

//#endregion

//#region BigInt和Number

/**
 * BigInt类型的值能够与Number类型的值进行大小及相等关系的比较。
 * 在进行严格相等比较时，BigInt类型的值与Number类型的值永远不相等。
 * 在进行非严格相等比较及大小关系比较时，
 * BigInt类型的值与Number类型的值将进行数学意义上的比较。
 * 
 * 虽然BigInt类型的值可以与Number类型的值进行比较，
 * 但是BigInt类型的值不允许与Number类型的值一起进行混合数学运算。
 * 示例如下：
 */
//BigInt和其他类型无法混用
//1 + 1n;

/**
 * 通过内置的Number()函数能够将BigInt类型的值转换为Number类型的值。
 * 但要注意，在BigInt类型与Number类型之间进行强制类型转换时有可能损失精度。
 * 示例如下：
 */
Number(1n); //1

//#endregion

//#endregion
