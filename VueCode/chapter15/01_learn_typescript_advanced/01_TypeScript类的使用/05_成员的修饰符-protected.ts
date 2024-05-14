class Person {
  // 1. 私有属性不能被外部访问，需要封装方法来操作name属性
  protected name: string = "123"
}

class Student extends Person {
  getName() {
    return this.name
  }
}

const stu = new Student()
// console.log(stu.name); // 4. 直接访问的name属性会报错
console.log(stu.getName());

export {}
