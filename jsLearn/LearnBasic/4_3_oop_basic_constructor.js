/**
 * 传统方式创建对象
 * 最简单的方式定义构造函数
 */
function Student1(name) {
  this.name_ = name;
  this.hello = function () {
    alert("Hello, " + this.name + "!");
  };
}

// 构造函数通过new来调用，返回一个原型。
// 如果不使用new来调用，则这就是一个普通函数，返回undefined （实际上编译会报错）
// 用new Student()创建的对象还从原型上获得了一个constructor属性，它指向函数Student本身
// prototype属性只有作为原型的对象才有，使用原型的叶子对象只有__proto__
let xm1 = new Student1("XiaoMing1");
// let stu2 = Student1("Mike"); // 会报错
let xh1 = new Student1("XiaoHong1");
console.log(xm1, xh1);
console.log(xm1.name_); // XiaoMing1
console.log(xh1.name_); // XiaoHong1
console.log(xm1.name_ === xh1.name_); // false
console.log(xm1.hello === xh1.hello); // false, 分别保存了一个相同的函数，浪费内存。
