"use strict";
"1. 基础语法";

/**
 * 数据类型
 */
let a = -1; // Number
b = 1.1e3; // Number
c = NaN; // Number
d = Infinity; // Number
e = 92233720n; // BigInt
f = `abcd${a}`; // String
g = true; // bool
h = null; // null
i = undefined; // undefined
j = [1, 2, 3]; // Array
k = { a: 1 }; // object
l = new Map([
  [1, "A"],
  [2, "B"],
  [3, "C"],
]); // Map-set-get-has-delete
m = new Set([1, 2, 3]); // Set-add-delete

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
for (const element of object) {
  console.log(`..${element}..`);
}
