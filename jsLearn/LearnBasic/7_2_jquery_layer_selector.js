"use strict";
"7. JQuery -> 选择器 -> 层级选择器";

// 无法引入 JQuery 因此无法执行代码
let // 多层选择器：只要有祖孙关系即可
  jlayers = $("ul.lang li.lang-javascript"), // 先搜ul.lang再搜li.lang-javascript
  // 子选择器：必须要求是父子关系
  jchilds = $("ul.lang>li.lang-javascript"),
  // 过滤器: 过滤器一般不单独使用，它通常附加在选择器上，帮助我们更精确地定位元素。
  jfilters = $("ul.lang li:first-child"),
  // 表单相关的选择器
  /**
   * - :input 可以选择<input>，<textarea>，<select>和<button>；
   * - :file 可以选择<input type="file">，和input[type=file]一样；
   * - :checkbox 可以选择复选框，和input[type=checkbox]一样；
   * - :radio 可以选择单选框，和input[type=radio]一样；
   * - :focus 可以选择当前输入焦点的元素，例如把光标放到一个<input>上，用$('input:focus')就可以选出；
   * - :checked 选择当前勾上的单选框和复选框，用这个选择器可以立刻获得用户选择的项目，如$('input[type=radio]:checked')；
   * - :enabled 可以选择可以正常输入的<input>、<select> 等，也就是没有灰掉的输入；
   * - :disabled 和:enabled正好相反，选择那些不能输入的。
   * 此外，jQuery还有很多有用的选择器，例如，选出可见的或隐藏的元素：
   * - visible 所有可见
   * - hidden 所有隐藏
   */
  jspselectors = $("div:visible");
