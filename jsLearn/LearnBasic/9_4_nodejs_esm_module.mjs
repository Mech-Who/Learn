"9. NodeJS -> 使用ESM模块";

/**
 * 虽然Node.js从诞生起就支持模块，但JavaScript语言本身长期以来却一直没有模块功能，只能由CommonJS或其他AMD等模块系统来“模拟”。
 *
 * 随着ES 6标准的推出，JavaScript语言本身终于也迎来了原生内置的模块支持，称为ECMAScript Modules（简称ESM），不仅可以直接在浏览器中使用模块，也可以在Node.js中使用ESM模块。
 *
 * 不使用ESM模块时，我们用module.exports导出可供外部使用的JS对象，例如，以下模块导出了两个函数：
 */
let s = "Hello";

// out是模块内部函数，模块外部不可见:
function out(prompt, name) {
  console.log(`${prompt}, ${name}!`);
}

// greet是导出函数，可被外部调用:
export function greet(name) {
  out(s, name);
}

// hi是导出函数，可被外部调用:
export function hi(name) {
  out("Hi", name);
}

// 并将其保存为hello.mjs文件，注意扩展名不是.js，而是.mjs。

// 如果要实现类似如下代码的单个函数导出：
// module.exports = greet;
// 则可以用export default导出：
export default function greet(name) {
  console.log("greet!");
}
// 相应的，导入代码修改为：
// import greet from './hello.mjs';

// 细心的同学还注意到ESM模块文件第一行并没有'use strict'，这是因为ESM模块默认启用严格模式，因此无需再手动声明'use strict'。

/**
 * 浏览器加载ESM
 */
// 对于浏览器来说，也可以直接使用ESM模块。当我们加载一个ESM模块时，需要用type="module"来表示：
/**
<html>
<head>
    <script type="module" src="./example.js"></script>
    <script type="module">
        greet('Bob');
    </script>
</head>
...
</html>
 */
// 或者直接使用import加载一个模块：
/**
<html>
<head>
    <script type="module">
        import { greet } from './example.js';
        greet('Bob');
    </script>
</head>
...
</html>
 */
