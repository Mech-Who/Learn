// 1. 方式一：用type定义函数类型
// type CalcFn = (n1: number, n2: number) => number

// 2. 方式二：用interface定义函数类型
interface CalcFn {
  (n1: number, n2: number): number
}

// 3. 指定add函数的类型
const add: CalcFn = (num1, num2) => {
  return num1 + num2
}

// 4. =指定参数clacFn函数的类型
function calc(num1: number, num2: number, calcFn: CalcFn) {
  return calcFn(num1, num2)
}
calc(20, 30, add)

export {}
