/**
 * 优化内存空间，将每一个对象的成员函数定义到其原型对象（Student）中，避免每个对象都保存一个相同的函数
 */
function Student2(name) {
  this.name_ = name;
}

//定义成员函数
Student2.prototype.hello = function () {
  console.log("Hello, " + this.name_ + "!");
};

// 使用new定义Student对象
// 用new Student()创建的对象还从原型上获得了一个constructor属性，它指向函数Student本身：
let xm2 = new Student2("XiaoMing2");
let xh2 = new Student2("XiaoHong2");
console.log("Student2: ");
console.log(xm2, xh2);
console.log(xm2.name_); // XiaoMing2
console.log(xh2.name_); // XiaoHong2
console.log(xm2.name_ === xh2.name_); // false
console.log(xm2.hello === xh2.hello); // true
console.log(xm2.constructor === Student2.prototype.constructor); // true
console.log(Student2.prototype.constructor === Student2); // true
console.log(Object.getPrototypeOf(xm2) === Student2.prototype); // true
console.log(xm2 instanceof Student2); // true

// 最后，我们还可以编写一个createStudent()函数，在内部封装所有的new操作。一个常用的编程模式像这样：
function Student3(props) {
  this.name = props.name || "匿名"; // 默认值为'匿名'
  this.grade = props.grade || 1; // 默认值为1
}

Student3.prototype.hello = function () {
  console.log("Hello, " + this.name + "!");
};

// 这个函数有几个巨大的优点：
// 1. 不需要new来调用
// 2. 参数非常灵活，可以不传，也可以这么传：
function createStudent(props) {
  return new Student3(props || {});
}

console.log("\nStudent3: ");
let xm3 = createStudent({ name: "XiaoMing3", grade: 2 });
console.log(xm3);
xm3.hello();
