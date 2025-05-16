"use strict";
"4. 面向对象编程";

/**
 * 原型链：
 * - arr->Array.prototype->Object.prototype->null
 * - foo->Function.prototype->Object.prototype->null
 * 原型链太长的话性能会下降，因此注意不要让原型链太长。
 */
let arr = [1, 2, 3];
function foo() {
  return 0;
}
