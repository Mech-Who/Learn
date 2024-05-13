class Person {
  name: string
  age: number
  // 1. 添加构造器，对属性进行初始化
  constructor(name: string, age: number) {
    this.name = name  // 属性初始化
    this.age = age
  }
  eating() { console.log(this.name + " eating") }
}

const p = new Person("why", 18)  // 4. 新建一个类
console.log(p.name, p.age) // 5. 访问对象的属性
p.eating()

export { }
