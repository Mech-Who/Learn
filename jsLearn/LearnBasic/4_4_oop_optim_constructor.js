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
let xm2 = new Student2("XiaoMing2");
let xh2 = new Student2("XiaoHong2");
console.log(xm2, xh2);
console.log(xm2.name_); // XiaoMing2
console.log(xh2.name_); // XiaoHong2
console.log(xm2.name_ === xh2.name_); // false
console.log(xm2.hello === xh2.hello); // true

// 最后，我们还可以编写一个createStudent()函数，在内部封装所有的new操作。一个常用的编程模式像这样：
function Student3(props) {
  this.name = props.name || "匿名"; // 默认值为'匿名'
  this.grade = props.grade || 1; // 默认值为1
}

Student3.prototype.hello = function () {
  alert("Hello, " + this.name + "!");
};

function createStudent(props) {
  return new Student3(props || {});
}
