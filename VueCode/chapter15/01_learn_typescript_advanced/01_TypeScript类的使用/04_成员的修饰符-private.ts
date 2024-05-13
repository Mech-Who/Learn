class Person {
  // 1. 私有属性不能被外部访问，需要封装方法来操作name属性
  private name: string = ""

  getName() { // 默认是public方法
    return this.name  // 2. 获取name
  }
  setName(newName) {
    this.name = newName // 3. 设置name
  }
}

const p = new Person()
// console.log(p.name); // 4. 直接访问私有的name属性会报错
console.log(p.getName());
