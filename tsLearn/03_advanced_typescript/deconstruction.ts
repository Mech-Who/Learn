//#region 解构

/**
 * JavaScript中的解构是指将数组或对象在结构上进行分解，将其拆分成独立的子结构，
 * 然后可以访问那些拆分后的子结构。解构提供了一种更加便利的数据访问方式，
 * 使用解构语法能够极大地简化代码。
 */

//#region 数组解构
/**
 * 数组解构赋值使用了类似于数组字面量的表示方式。
 * 赋值运算符右侧为需要解构的数组，赋值运算符左侧是解构赋值的目标，
 * 在解构赋值的同时也支持声明新的变量。
 * 下例中，将对point数组进行解构，然后把数组的第一个元素0赋值给变量x，
 * 第二个元素1赋值给变量y：
 */
const point = [0, 1];

const [x, y] = point;

console.log(x, y);
//#endregion

//#region 对象解构
/**
 * 对象解构赋值使用了类似于对象字面量的表示方式。
 * 赋值运算符右侧为需要解构的对象，赋值运算符左侧是解构赋值的目标，
 * 在解构赋值的同时也支持声明新的变量。
 * 下例中，将对point对象进行解构，然后把属性x和y的值赋值给变量x和y：
 */
const point_2 = { x2: 0, y2: 1};

const { x2, y2 } = point_2;

console.log(x2, y2);
//#endregion

//#endregion