class Person {
  name: string = 'coder'
  eating() { }
}

const p = new Person()  // 用类创建对象
const p1: Person = {  // 1. 类作为一种数据类型使用
  name: "why",
  eating() { }
}
function printPerson(p: Person) { // 2. 类作为数据类型使用
  console.log(p.name);
}

printPerson(new Person())
printPerson({ name: 'kobe', eating: function () { } })

export { }