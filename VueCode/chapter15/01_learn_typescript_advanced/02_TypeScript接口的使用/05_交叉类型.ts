interface ISwim {
  swimming: () => void
}
interface IFly {
  flying: () => void
}
type MyType1 = ISwim | IFly
type MyType2 = ISwim & IFly
// 1. 联合类型
const obj1: MyType1 = {
  flying() { }
}
// 2. 交叉类型
const obj2: MyType2 = {
  swimming() { },
  flying() { }
}

export { }
