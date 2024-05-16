interface IPerson {
  name: string
}
const info: IPerson = {
  name: "why",  // ok
  //age: 18 // 报错： Type '{name: string; age: number;}' is not assignable to type 'IPerson'
}

const info2 = {
  name: "why",  // ok
  age: 18 // ok
}
// 1. 字符串赋值。TypeScript会擦除（freshness）IPerson类型之外的类型检查
const p: IPerson = info2

function printInfo(person: IPerson) {
  console.log(person);
}
// 2. 将字面量对象直接传给函数的参数
printInfo({
  name: "why",
  // age: 18 // 报错
})

// 3. 对字面量对象的引用，传递给函数参数
printInfo(info) // ok

export { }
