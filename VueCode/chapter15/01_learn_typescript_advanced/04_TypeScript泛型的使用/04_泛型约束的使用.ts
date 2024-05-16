// 1. 接口定义对象类型
interface ILength {
  length: number
}
// 2. 在getLength函数中定义T类型变量，并添加类型的约束
//    T 类型必须包含ILength接口中定义的length属性
function getLength<T extends ILength>(arg: T) {
  return arg.length
}

// 3. 泛型约束的使用
getLength("abc")  // TypeScript会自动推导出string类型（string有length属性）
// 向T类型变量传递string[]类型（该类型有length属性）
getLength<string[]>(["abc", "cba"])
// 向T类型变量传递{length: number}对象类型（该类型有length属性）
getLength<{ length: number }>({ length: 100 })
// getLength<number>(1000) // 报错：Type 'number' does not satisfy the constraint 'ILength'

export { }
