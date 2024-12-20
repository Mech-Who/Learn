// 1. 方式一：通过类型别名（type）声明对象类型
// type IInforType = {readonly name: string, age?: number, height: number}

// 2. 方式二：通过接口（interface）声明对象类型
interface IInfoType {
  readonly name: string // 只读属性
  age?: number  // 可选类型
  height: number
}

// 指定对象的类型
const info: IInfoType = {
  name: "why",
  age: 18,
  height: 1.68
}
console.log(info.name);
//info.name = "123" // 只读属性不能修改
info.age = 20 // 可以修改

export { }
