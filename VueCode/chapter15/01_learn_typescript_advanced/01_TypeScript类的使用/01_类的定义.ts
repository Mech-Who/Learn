// 1. 定义一个person类
class Person {
  // 2. 定义属性，需初始化，否则编译报错
  name: string = 'coder'
  age: number = 18
  // 3. 定义方法
  eating() { console.log(this.name + " eating") }
}


const p = new Person()  // 4. 新建一个类
console.log(p.name, p.age) // 5. 访问对象的属性
p.eating()

export { }
