"use strict";
"1. 基础语法";

/**
 * 数据类型
 */
let a = -1; // Number
let b = 1.1e3; // Number
let c = NaN; // Number
let d = Infinity; // Number
let e = 92233720n; // BigInt
let f = `abcd${a}`; // String
let g = true; // bool
let h = null; // null
let i = undefined; // undefined
let j = [1, 2, 3]; // Array
let k = { a: 1 }; // object
let l = new Map([
  [1, "A"],
  [2, "B"],
  [3, "C"],
]); // Map-set-get-has-delete
let m = new Set([1, 2, 3]); // Set-add-delete

// 判断数据类型用typeof关键字
console.log(typeof m, typeof e, typeof f, typeof c);

/**
 * 流程控制
 */
if (a < 0) {
  console.log("a < 0!");
} else if (a > 0) {
  console.log("a > 0!");
} else {
  console.log("a == 0!");
}

for (let idx = 0; idx < 10; ++idx) {
  console.log(`:${idx}:`);
}

let arr = [1, 2, 3, 4, 5];
for (let elem in arr) {
  console.log(`--${elem}--`);
}

let cnt1 = 0;
while (cnt1 < 10) {
  ++cnt1;
  console.log(`==${cnt1}==`);
}

let cnt2 = 0;
do {
  ++cnt2;
  console.log(`,,${cnt2},,`);
} while (cnt2 < 10);

// for iterable
// 这种方式要优于for...in语法，只会遍历容器元素。
// for...in语法会遍历arr的所有属性。
let arr2 = [2, 3, 4, 5, 6];
for (const element of arr2) {
  console.log(`..${element}..`);
}
