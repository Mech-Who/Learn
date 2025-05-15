"use strict";
"2. 函数使用";

/**
 * 函数定义与调用
 */
function def(name) {
  console.log(`def: ${name}`);
} // 定义
def(); // 调用
// console.log(y); // 变量提升（y提升到这里就定义）,strict模式会报错
let y = 1;

/**
 * 作用域 与 解构赋值
 */
// window 就是全局对象，window内部就是全局作用域。
// nodejs中不会有window对象，只有在浏览器中才有
// window.def("window");
def("global");

// 建议定义全局变量做为全局的模块命名空间
let MYAPP = {};
MYAPP.name = "myapp";
MYAPP.version = "1.0";
MYAPP.def = function (type) {
  return `def: ${type}`;
};

// var无法被局限于局部作用域（块作用域），只能使用let。
function var_let() {
  for (var ix = 0; ix < 10; ++ix) {
    console.log(`var: ${ix}`);
  }
  console.log(ix);

  for (let jx = 0; jx < 10; ++jx) {
    console.log(`let: ${jx}`);
  }
  console.log(jx); // Exception
}

// const 定义常量
const PI = 3.14;

// 解构赋值
let [x1, y1, z1] = [1, 2, 3];
console.log(`x1: ${x1}, y1: ${y1}, z1: ${z1}`);
// 对象解构
let person = {
  name: "小明",
  age: 20,
  gender: "male",
  passport: "G-12345678",
  school: "No.4 middle school",
};
let { name1, age, passport } = person;
// name, age, passport分别被赋值为对应属性:
console.log(`name = ${name1}, age = ${age}, passport = ${passport}`);
// 解构赋值实现swap
function swap(x, y) {
  [x, y] = [y, x];
}

/**
 * 函数 与对象中的 方法
 */
let xiaoming = {
  name: "小明",
  birth: 1990,
  age: function () {
    let y = new Date().getFullYear();
    return y - this.birth;
  },
};
console.log(xiaoming.age());

// 函数中的this会指向window，对象中的方法的this则会指向object。
// 即使后续将全局函数赋值为对象方法，也无法修改this指向。
// 使用this的函数必须以obj.xxx()的方式调用才能正常使用。
// 可以通过闭包+that技术来实现方法中定义函数，再使用了。
xiaoming.test = function () {
  let that = this; // 在方法内部一开始就捕获this
  function getAgeFromBirth() {
    let y = new Date().getFullYear();
    return y - that.birth; // 用that而不是this
  }
  return getAgeFromBirth();
};
console.log(xiaoming.test());

// 利用function对象的apply()方法修改this指向
function test2() {
  console.log(this.age);
}
test2.apply(xiaoming, []);
test2.call(xiaoming);

// 装饰器，可以通过重新定义的方式实现装饰器
let count = 0;
let oldParseInt = parseInt;
parseInt = function () {
  count += 1;
  return oldParseInt.apply(null, arguments);
};
console.log(`parse: ${parseInt("1")}`);
console.log(`parse: ${parseInt("2")}`);
console.log(`parse: ${parseInt("3")}`);
console.log(`count: ${count}`);

/**
 * Array的高阶函数
 */

// map/reduce
let array = [1, 2, 3];
console.log(array);
console.log("map:");
console.log(array.map((x) => x * x));
console.log("reduce:");
console.log(array.reduce((x, y) => x + y));

// filter
console.log("filter:");
console.log(array.filter((x) => x > 1));

// sort
console.log("sort:");
console.log(
  array.sort((x, y) => {
    return y - x;
  })
);

// every
console.log("every:");
console.log(array.every((x) => x > 1));

// find
console.log("find:");
console.log(array);
console.log(array.find((x) => x > 2));

// findIndex
console.log("findIndex:");
console.log(array);
console.log(array.findIndex((x) => x > 2));

// forEach
console.log("forEach:");
console.log(array);
console.log(array.forEach((x) => console.log(`for: ${x}`)));

/**
 * 闭包
 */
function lazy_sum() {
  let arr3 = [0];
  return function (arrt) {
    arr3.concat(arrt);
    return arr3.length > 0 ? arr3.reduce((x, y) => x + y) : arr3;
  };
}
let lazy_res = lazy_sum();
console.log(`lazy_res1: ${lazy_res([1, 2, 3, 4, 5])}`);
console.log(`lazy_res2: ${lazy_res([6, 7, 8])}`);

/**
 * 箭头函数（匿名函数）
 */

/**
 * 标签函数
 */

/**
 * 生成器函数
 */
