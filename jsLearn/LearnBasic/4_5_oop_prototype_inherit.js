"use strict";
"4. 面向对象编程";
/**
 * 原型继承
 *
 * 在传统的基于Class的语言如Java、C++中，继承的本质是扩展一个已有的Class，并生成新的Subclass。
 * 由于这类语言严格区分类和实例，继承实际上是类型的扩展。但是，JavaScript由于采用原型继承，我们无法直接扩展一个Class，因为根本不存在Class这种类型。
 * 但是办法还是有的。
 *
 * JavaScript的原型继承实现方式就是：
 * 1. 定义新的构造函数，并在内部用call()调用希望“继承”的构造函数，并绑定this；
 * 2. 借助中间函数F实现原型链继承，最好通过封装的inherits函数完成；
 * 3. 继续在新的构造函数的原型上定义新方法。
 */
function Student(props) {
  this.name = props.name || "Unnamed";
}

Student.prototype.hello = function () {
  console.log(`Hello, ${this.name}!`);
};

function PrimaryStudent() {
  Student.call(this, props);
  this.grade = props.grade || 1;
}

function F() {}

F.prototype = Student.prototype;

PrimaryStudent.prototype = new F();

PrimaryStudent.prototype.constructor = PrimaryStudent;

PrimaryStudent.prototype.getGrade = function () {
  return this.grade;
};

// 新的原型链：xm -> new F() -> Student.prototype -> Object.prototype -> null
let xm = new PrimaryStudent({
  name: "XiaoMing",
  grade: 2,
});
console.log(xm);
console.log(xm.__proto__ === PrimaryStudent.prototype); // true
console.log(xm.__proto__.__proto__ === Student.prototype); // true
console.log(xm instanceof PrimaryStudent); // true
console.log(xm instanceof Student); // true

// 注意，函数F仅用于桥接，我们仅创建了一个new F()实例，而且，没有改变原有的Student定义的原型链。
// 如果把继承这个动作用一个inherits()函数封装起来，还可以隐藏F的定义，并简化代码：
function inherits(Child, Parent) {
  let F = function () {};
  F.prototpy = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
}

function Student1(props) {
  this.name = props["name"];
  this.grade = props["grade"];
}
Student1.prototype.hello = function () {
  console.log(`Hello, this is ${this.name}!`);
};

function PrimaryStudent1(props) {
  Student1.call(this, props);
  this.grade = props["grade"];
}

inherits(PrimaryStudent1, Student1);

PrimaryStudent1.prototype.getGrade = function () {
  return this.grade;
};
let pxm = new PrimaryStudent1();
console.log(pxm);
console.log(`Grade: ${pxm.getGrade()}`);
