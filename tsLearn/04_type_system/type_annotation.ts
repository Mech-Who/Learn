//#region 类型注解

/**
 * 在TypeScript中，我们可以使用类型注解来明确标识类型。
 * 类型注解的语法由一个冒号“:”和某种具体类型“Type”组成，
 * 示例如下：
 *
 * :Type
 *
 * TypeScript中的类型注解总是放在被修饰的实体之后。
 * 示例如下：
 */
const greetings: string = "Hello, World!";
//此例中，我们为常量greeting添加了类型注解，将它标记成了string类型。

/**
 * TypeScript中的类型注解是可选的，
 * 编译器在大部分情况下都能够自动推断出表达式的类型。
 * 示例如下：
 */
const greetingss = "Hellow, World!";
//此例中，虽然没有给常量greeting添加类型注解，
//但是TypeScript仍然能够从greeting的初始值中推断出它是string类型的常量。
//关于类型推断的详细介绍请参考7.3节。

//#endregion
