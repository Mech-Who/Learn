//#region 变量声明
// var: var声明使用var关键字来定义。
/**
 * 在声明变量时，可以为变量赋予一个初始值。
 * 若变量未初始化，则其默认值为undefined。
 */
var apple = 1;
var a;
// let: let声明使用let关键字来定义。
/**
 * 在声明变量时，可以为变量赋予一个初始值。
 * 若变量未初始化，则其默认值为undefined。
 */
let banana = 1;
let b;
// const: 与var声明和let声明不同，const声明用于定义一个常量。
/**
 * const声明使用const关键字来定义，并且在定义时必须设置一个初始值。
 * const声明在初始化之后不允许重新赋值。
 */
const c = 0;
//#endregion

//#region 块级作用域
/**
 * 块级作用域的概念包含了两部分，即块和作用域。
 *
 * 作用域：
 * 变量的作用域指的是该变量的可访问区域，
 * 一个变量只能在其所处的作用域内被访问，
 * 在作用域外是不可见的。
 *
 * 块：
 * 指的是“块语句”。
 * 块语句用于将零条或多条语句组织在一起。
 * 在语法上，块语句使用一对大括号“{}”来表示。
 *
 * 块级作用域指的就是块语句所创建的作用域，
 * 使用let声明和const声明的变量具有块级作用域，
 * 但是使用var声明的变量不具有块级作用域。
 */
let first = 0;
const second = 1;
var third = 2;
console.log("before:");
console.log("let: ", first, "const: ", second, "var: ", third);

{
  let first = 3;
  const second = 4;
  var third = 5;
  console.log("inside:");
  console.log("let: ", first, "const: ", second, "var: ", third);
}

console.log("after:");
console.log("let: ", first, "const: ", second, "var: ", third);
//#endregion

//#region 注释
/**
 * 单行注释
 * 多行注释
 *
 * 区域注释：便于折叠代码段
 * //#region 区域描述
 * //#endregion
 */
//#region 指定折叠段

console.log("hello world!");

//#endregion
//#endregion
