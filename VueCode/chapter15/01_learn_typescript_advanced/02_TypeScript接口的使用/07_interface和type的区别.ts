interface IFoo {
  name: string
}
interface IFoo {
  age: number
}
// 1. IFoo类型是上面两个IFoo接口的合并
const foo: IFoo = {
  name: "why",
  age: 18
}

// 2. 类型别名不能重复
// type IBar = {
//   name: string // 报错： Duplicate identifier 'IBar'
// }
type IBar = {
  age: number // 报错，不能重复定义
}

export {}
