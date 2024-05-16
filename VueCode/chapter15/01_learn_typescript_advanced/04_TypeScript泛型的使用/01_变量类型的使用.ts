// function foo(arg: number): number {
//   return arg
// }
// 泛型
function foo<Type>(arg: Type): Type {
  return arg
}

// 调用方式一：向类型变量Type传递具体的类型
foo<Number>(20) // 这时，Type为number类型
foo<{ name: string }>({ name: "why" })

// 调用方式二：TypeScript会自动推导出Type具体的类型
foo(50)
foo("abc")//  

// 类型变量可以定义多个
function foo2<T, E>(a1: T, a2: E) { }
foo2<number, string>(20, 'abc')