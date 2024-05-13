class Animal {
  action() {
    console.log("animal action");
  }
}

class Dog extends Animal {
  action() {
    console.log("dog running!!!");
  }
}

class Fish extends Animal {
  action() {
    console.log("fish swimming!!!");
  }
}

// 1. 多态是为了写出更具通用性的代码
function makeActions(animals: Animal[]) {
  animals.forEach(animal => {
    // 2. animals是父类的引用，指向子类对象
    animal.action() // 3. 调用子类的action方法
  })
}