"use strict";
"4. 面向对象编程";

/**
 * 更简单的写法实现面向对象：class关键字
 */
// 这种写法避免了分散的代码。
// 类的定义
class Student {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello, ${this.name}!`);
  }
}

let xm = new Student("XiaoMing");
xm.hello();

/**
 * class inherit
 */
// 注意PrimaryStudent的定义也是class关键字实现的，而extends则表示原型链对象来自Student。
// 子类的构造函数可能会与父类不太相同，例如，PrimaryStudent需要name和grade两个参数，并且需要通过super(name)来调用父类的构造函数，否则父类的name属性无法正常初始化。
// ES6引入的class和原有的JavaScript原型继承有什么区别呢？实际上它们没有任何区别，class的作用就是让JavaScript引擎去实现原来需要我们自己编写的原型链代码。
// 简而言之，用class的好处就是极大地简化了原型链代码。
class PrimaryStudent extends Student {
  constructor(name, grade) {
    super(name); // 记得用super调用父类的构造方法
    this.grade = grade;
  }
  getGrade() {
    console.log(`I am at grade ${this.grade}`);
  }
}

let pxm = new PrimaryStudent("PrimaryXiaoMing", 2);
console.log(pxm);
pxm.getGrade();
