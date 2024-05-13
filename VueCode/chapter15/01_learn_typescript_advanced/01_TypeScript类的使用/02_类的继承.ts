class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  eating(): void { console.log("eating") }
}

// 1. Student继承Person
class Student extends Person {
  sno: number
  constructor(name: string, age: number, sno: number) {
    super(name, age)  // 2. super调用父类的构造器
    this.sno = sno
  }
  studying(): void { console.log("studying") }
  eating() {
    console.log("student eating");
    super.eating()
  }
}

const stu = new Student('why', 18, 10100)
console.log(stu.name, stu.age);
stu.eating()  // 调用继承父类的方法

export { }
