//#region 单元类型
/**
 * 单元类型（Unit Type）也叫作单例类型（Singleton Type），指的是仅包含一个可能值的类型。
 * 由于这个特殊的性质，编译器在处理单元类型时甚至不需要关注单元类型表示的具体值。
 *
 * TypeScript中的单元类型有以下几种：
 *
 * 1. undefined类型。
 * 2. null类型。
 * 3. unique symbol类型。
 * 4. void类型。
 * 5. 字面量类型。
 * 6. 联合枚举成员类型。
 */

/**
 * 我们能够看到这些单元类型均只包含一个可能值。示例如下：
 */
const a17: undefined = undefined;
const b17: null = null;
const c17: unique symbol = Symbol();
const d17: void = undefined;
const e17: "hello" = "hello";

enum Foo9 {
  A,
  B,
}
const f3: Foo9.A = Foo9.A;
//#endregion
