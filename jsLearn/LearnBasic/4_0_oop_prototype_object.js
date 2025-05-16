"use strict";
"4. 面向对象编程";

/**
 * Javascript没有真正的类，只有对象。其面向对象通过原型链来实现。所谓的类不过是对象的原型（__proto__）。
 * JavaScript的原型链和Java的Class区别就在，它没有“Class”的概念，所有对象都是实例，所谓继承关系不过是把一个对象的原型指向另一个对象而已。
 * 在代码中可以通过修改实例的__proto__属性来修改它的父类。（实际中并不建议这样用）
 * 通过Object.create(obj)，可以以obj为原型创建一个新的对象。但是该对象没有任何属性，因此可以再写一个函数来进行初始化，作为构造函数，只是目前这个函数是一个全局函数。
 * 创建原型继承还有其他方法。
 */
// 原型对象:
let Student0 = {
  name: "Robot",
  height: 1.2,
  run: function () {
    console.log(this.name + " is running...");
  },
};

let stu = { name: "XiaoMing" };
stu.__proto__ = Student0;
stu.run();
