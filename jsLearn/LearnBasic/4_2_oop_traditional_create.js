"use strict";
"4. 面向对象编程";

/**
 * 传统方式创建对象
 */
let Student0 = {
  name: "Robot",
  height: 1.2,
  run: function () {
    console.log(this.name + " is running...");
  },
};
// 通过函数创建基于Student的对象
function createStudent(name) {
  // 基于Student原型创建一个新对象:
  let s = Object.create(Student0);
  // 初始化新对象:
  s.name = name;
  s.run();
  return s;
}

let xm0 = createStudent("XiaoMing0");
console.log(xm0);
xm0.run(); // 小明 is running...
xm0.__proto__ === Student0; // true
