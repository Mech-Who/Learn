//#region 展开运算符

/**
 * 展开运算符是ECMAScript 2015中定义的运算符，
 * 可以用在多种上下文中，比如对象字面量、数组字面量和函数调用语句等。
 * 展开运算符使用连续的三个点符号“...”来表示。
 * 展开运算符的后面是一个表达式，表达式的求值结果为要展开的值。
 * 展开运算符的具体语法如下所示：
 * ...expression
 */

//#region 展开数组字面量
/**
 * 在数组字面量中可以使用展开运算符。
 * 数组字面量中的展开运算符可以应用在任何可迭代对象上，
 * 它的作用是将迭代产生的每个值插入数组字面量的指定位置上。
 * 示例如下：
 */
const firstHalfYearSeasons = ["Spring", "Summer"];
const seasons = [...firstHalfYearSeasons, "Fall", "Winter"];

console.log(seasons);

//数组字面量可以仅由一个展开元素构成，这相当于对数组进行了复制操作。
//#endregion

//#region 展开对象字面量
/**
 * 在对象字面量中也可以使用展开运算符。
 * 对象字面量中的展开运算符会将操作数的自身可枚举属性复制到当前对象字面量中。
 * 示例如下：
 */
const point2d = {
    x: 0,
    y: 0,
};

const point3d = {
    ...point2d,
    z: 0,
};

console.log(point3d); // { x: 0, y: 0, z: 0 }

//对象字面量可以仅由一个展开属性定义构成，这相当于对对象进行了复制操作。
//#endregion

//#region 展开函数参数
/**
 * 在调用一个函数时可以在实际参数列表中使用展开运算符来展开一个可迭代对象，
 * 它的作用是将迭代产生的每个值当成独立的实际参数传递给函数。
 * 示例如下：
 */
const nums = [3, 1, 4];
const max = Math.max(...nums);

console.log(max);   // 4

//Math.max()是JavaScript的内置函数，它接受任意数量的数字参数并返回最大的数字。
//#endregion

//#endregion
