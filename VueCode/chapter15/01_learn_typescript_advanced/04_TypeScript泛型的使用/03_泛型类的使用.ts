// 1. 在Point类上定义T类型变量
class Point<T> {
  x: T
  y: T
  z: T
  constructor(x: T, y: T, z: T) {
    this.x = x
    this.y = y
    this.z = z
  }
}
// 2. TypeScript会自动推导T类型变量的具体类型
const p1 = new Point("1.33.2", "2.22.3", "4.22.1")
// 3. 向Point类的T类型变量传递具体的string类型
const p2 = new Point<string>("1.33.2", "2.22.3", "4.22.1")
const p3: Point<string> = new Point("1.33.2", "2.22.3", "4.22.1")

export { }
