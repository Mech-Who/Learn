"use strict";
"7. JQuery -> 选择器";

// 无法引入JQuery因此无法执行。
let // search by id
  jdivs = $("#abc"), // jQuery object: [] or [<div>]
  div = divs[0], // Element
  jdiv = $(div), // jQuery object
  // search by tag
  jps = $("p"), // jQuery object: [] or [<p>]
  // search by class
  jreds = $(".red"),
  jred_greens = $(".red.green"),
  // search by attr
  jattrs = $("[name=email]"), // <??? name="email">
  jattr_with_spaces = $('[items="A B"]'), // 包含空格等特殊字符时需要用双引号括起来: <??? items="A B">
  jicons = $("[class^=icon]"), // 前缀查找: <??? class="icon-1">
  jnames = $("[class$=with]"), // 后缀查找: <??? class="some-with">
  // search by composition
  jelems = $("input[name=email]"), // 把同时满足 <input name="emial"> 的节点选出来
  // search by multiple
  jnodes = $("p.red,p.green"); // 把符合 <p class="red"> 和 <p class="green"> 的都选出来
