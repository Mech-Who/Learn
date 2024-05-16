// 1. 定义Direction枚举
enum Direction {
  LEFT,
  RIGHT
}
// 2. 指定Direction参数为Direction枚举类型
function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log("改变角色的方向向左");
      break;
    case Direction.RIGHT:
      console.log("改变角色的方向向右");
      break;
    default:
      const foo: never = direction; // 确保枚举的每个成员都被处理过
      break;
  }
}
turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)

// 获取枚举成员的值
console.log(Direction.LEFT);  // 打印0
console.log(Direction.RIGHT); // 打印1

enum Direction2 {
  LEFT = 100,
  RIGHT // 自增长
}
// 获取枚举成员的值
console.log(Direction.LEFT);  // 打印100
console.log(Direction.RIGHT);  // 打印101

enum Direction3 {
  LEFT,
  RIGHT = "Right"
}
// 获取枚举成员的值
console.log(Direction.LEFT);  // 打印0
console.log(Direction.RIGHT);  // 打印Right

