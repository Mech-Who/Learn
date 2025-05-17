"use strict";
"7. JQuery -> 操作DOM -> 修改DOM结构";

/**
 * 修改DOM结构
 *
 * 直接使用浏览器提供的API对DOM结构进行修改，不但代码复杂，而且要针对浏览器写不同的代码。
 *
 * 有了jQuery，我们就专注于操作jQuery对象本身，底层的DOM操作由jQuery完成就可以了，这样一来，修改DOM也大大简化了。
 */

/**
 * 添加DOM
 *
 * 要添加新的DOM节点，除了通过jQuery的html()这种暴力方法外，还可以用append()方法。
 * 如何向列表新增一个语言？
 * 1. 首先要拿到<ul>节点
 * 2. 然后，调用append()传入HTML片段
 * 除了接受字符串，append()还可以传入原始的DOM对象，jQuery对象和函数对象。
 * 传入函数时，要求返回一个字符串、DOM对象或者jQuery对象。因为jQuery的append()可能作用于一组DOM节点，只有传入函数才能针对每个DOM生成不同的子节点。
 * append()把DOM添加到最后，prepend()则把DOM添加到最前。
 * 另外注意，如果要添加的DOM节点已经存在于HTML文档中，它会首先从文档移除，然后再添加，也就是说，用append()，你可以移动一个DOM节点。
 * 如果要把新节点插入到指定位置，例如，JavaScript和Python之间，那么，可以先定位到JavaScript，然后用after()方法。
 * 也就是说，同级节点可以用after()或者before()方法。
 */

/**
 * 删除节点
 *
 * 要删除DOM节点，拿到jQuery对象后直接调用remove()方法就可以了。如果jQuery对象包含若干DOM节点，实际上可以一次删除多个DOM节点。
 */
