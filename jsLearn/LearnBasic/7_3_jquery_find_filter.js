"use strict";
"7. JQuery -> 选择器 -> 查找和过滤";

// 无法引入 JQuery 因此无法执行代码

// 查找
let ul = $("ul.lang");
// 最常见的查找是在某个节点的所有子节点中查找，使用find()方法，它本身又接收一个任意的选择器。
ul.find(".dy");
// 如果要从当前节点开始向上查找，使用parent()方法：
ul.parent(".red");
// 对于位于同一层级的节点，可以通过next()和prev()方法
ul.next("#id");
ul.prev("#id");

// 过滤
// filter()方法可以过滤掉不符合选择器条件的节点，通过传入选择器或者或者传入一个函数，要特别注意函数内部的this被绑定为DOM对象，不是jQuery对象：
ul.filter(".dy");

// map()方法把一个jQuery对象包含的若干DOM节点转化为其他对象：
// 用get()拿到包含string的Array
let arr = ul.map(() => this.innerHTML).get();

// 此外，一个jQuery对象如果包含了不止一个DOM节点，first()、last()和slice()方法可以返回一个新的jQuery对象，把不需要的DOM节点去掉：
let first = ul.first();
let last = ul.last();
let slice = ul.slice(2, 4);
