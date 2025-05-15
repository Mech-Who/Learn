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
let Student = {
  name: "Robot",
  height: 1.2,
  run: function () {
    console.log(this.name + " is running...");
  },
};

function createStudent(name) {
  // 基于Student原型创建一个新对象:
  let s = Object.create(Student);
  // 初始化新对象:
  s.name = name;
  return s;
}

let xiaoming = createStudent("小明");
xiaoming.run(); // 小明 is running...
xiaoming.__proto__ === Student; // true

/**
 * 创建对象
 * 原型链：
 * - arr->Array.prototype->Object.prototype->null
 * - foo->Function.prototype->Object.prototype->null
 * 原型链太长的话性能会下降，因此注意不要让原型链太长。
 */
let arr = [1, 2, 3];
function foo() {
  return 0;
}

// 构造函数
function Student1(name) {
  this.name_ = name;
  this.hello = function () {
    alert("Hello, " + this.name + "!");
  };
}
// 构造函数通过new来调用，返回一个原型。
// 如果不使用new来调用，则这就是一个普通函数，返回undefined （实际上编译会报错）
let stu1 = new Student1("John");
// let stu2 = Student1("Mike"); // 会报错
console.log(stu1, stu2);
// prototype属性只有作为原型的对象才有，使用原型的叶子对象只有__proto__

// 最后，我们还可以编写一个createStudent()函数，在内部封装所有的new操作。一个常用的编程模式像这样：
function Student2(props) {
  this.name = props.name || "匿名"; // 默认值为'匿名'
  this.grade = props.grade || 1; // 默认值为1
}

Student2.prototype.hello = function () {
  alert("Hello, " + this.name + "!");
};

function createStudent(props) {
  return new Student2(props || {});
}
