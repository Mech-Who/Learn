// 1. 声明一个命名空间：Time
export namespace Time {
  // 在Time命名空间中定义属性和方法
  export function format(time: string[]) { return time.join('_') }
  export let name: string = "coder"
}

// 1. 声明一个命名空间: Price
export namespace Price {
  export function format(price: number) { return price.toFixed(2) }
}