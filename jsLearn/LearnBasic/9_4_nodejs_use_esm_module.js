"use strict";
"9. NodeJS -> 使用ESM模块";

import { greet, hi } from "./9_4_nodejs_esm_module.mjs";

let name = "Bob";
greet(name);
hi(name);

// 可见，ESM模块用export关键字导出一个JS对象，用import关键字导入一个模块的导出对象。
