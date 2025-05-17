"use strict";
"9. NodeJS -> 使用模块";

/**
 * 问题是其他模块怎么使用hello模块的这个greet函数呢？我们再编写一个main.js文件，调用hello模块的greet函数：
 */

"use strict";

// 引入hello模块:
const greet = require("./9_3_nodejs_module");
// 如果只写模块名：
// 则Node会依次在内置模块、全局模块和当前模块下查找hello.js，你很可能会得到一个错误：

let s = "Michael";

greet(s); // Hello, Michael!
