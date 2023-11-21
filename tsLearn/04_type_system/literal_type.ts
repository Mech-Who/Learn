//#region 字面量类型
/**
 * TypeScript支持将字面量作为类型使用，我们称之为字面量类型。
 * 每一个字面量类型都只有一个可能的值，即字面量本身。
 */

//#region boolean字面量类型
/**
 * boolean字面量类型只有以下两种：
 *
 * 1. true字面量类型
 * 2. false字面量类型
 *
 * 原始类型boolean等同于由true字面量类型和false字面量类型构成的联合类型，即：
 */
type BooleaanAlias = true | false;

/**
 * true字面量类型只能接受true值；
 * 同理，false字面量类型只能接受false值，
 * 示例如下：
 */
const a9: true = true;
const b9: false = false;

/**
 * boolean字面量类型是boolean类型的子类型，
 * 因此可以将boolean字面量类型赋值给boolean类型，
 * 示例如下：
 */
const a10: true = true;
const b10: false = false;

let c10: boolean;
c10 = a10;
c10 = b10;
//#endregion

//#region string字面量类型
/**
 * 字符串字面量和模板字面量都能够创建字符串。
 * 字符串字面量和不带参数的模板字面量可以作为string字面量类型使用。
 * 示例如下：
 */
const a11: "hello" = "hello";
const b11: "world" = "world";

/**
 * string字面量类型是string类型的子类型，
 * 因此可以将string字面量类型赋值给string类型。
 * 示例如下：
 */
const a12: "hello" = "hello";
const b12: "world" = "world";

let c12: string;
c12 = a12;
c12 = b12;
//#endregion

//#region 数字字面量类型
/**
 * 数字字面量类型包含以下两类：
 *
 * 1. number字面量类型。
 * 2. bigint字面量类型。
 *
 * 所有的二进制、八进制、十进制和十六进制数字字面量都可以作为数字字面量类型。
 * 示例如下：
 */
const a13: 0b1 = 1;
const b13: 0o1 = 1;
const c13: 1 = 1;
const d13: 0x1 = 1;

const a14: 0b1n = 1n;
const b14: 0o1n = 1n;
const c14: 1n = 1n;
const d14: 0x1n = 1n;

/**
 * 除了正数数值外，负数也可以作为数字字面量类型。示例如下：
 */
const a15: -10 = -10;
const b15: 10 = 10;

const a16: -10n = -10n;
const b16: 10n = 10n;

/**
 * number字面量类型和bigint字面量类型分别是number类型和bigint类型的子类型，
 * 因此可以进行赋值操作。
 * 示例如下：
 */
const one: 1 = 1;
const num: number = one;

const oneN: 1n = 1n;
const numN: bigint = oneN;
//#endregion

//#region 枚举成员字面量映射
/**
 * 在5.4节中介绍了联合枚举成员类型。
 * 我们也可以将其称作枚举成员字面量类型，
 * 因为联合枚举成员类型使用枚举成员字面量形式表示。
 * 示例如下：
 */
enum Direction17 {
  Up,
  Down,
  Left,
  Right,
}

const up3: Direction17.Up = Direction17.Up;
const down3: Direction17.Down = Direction17.Down;
const left3: Direction17.Left = Direction17.Left;
const right3: Direction17.Right = Direction17.Right;
//关于枚举类型的详细介绍请参考5.4节。
//#endregion

//#endregion
