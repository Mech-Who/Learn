"use strict";
"7. JQuery -> 操作DOM";

// jQuery对象的text()和html()方法分别获取节点的文本和原始HTML文本，例如，如下的HTML结构：
let ul = $("ul");
ul.text(); // 获取节点的文本
ul.html(); // 获取节点的原始HTML文本

// 如何设置文本或HTML？jQuery的API设计非常巧妙：无参数调用text()是获取文本，传入参数就变成设置文本，HTML也是类似操作，自己动手试试：
ul.text("just try");
ul.html("<p>123</p>");

// 一个jQuery对象可以包含0个或任意个DOM对象，它的方法实际上会作用在对应的每个DOM节点上。
// 所以jQuery对象的另一个好处是我们可以执行一个操作，作用在对应的一组DOM节点上。即使选择器没有返回任何DOM节点，调用jQuery对象的方法仍然不会报错。这意味着jQuery帮你免去了许多if语句。

/**
 * 修改CSS
 *
 * jQuery对象有“批量操作”的特点，这用于修改CSS实在是太方便了。
 * 要高亮显示动态语言，调用jQuery对象的css('name', 'value')方法，我们用一行语句实现：
 */
$("#test-css li.dy>span").css("background-color", "#ff0").css("color", "#c00");

// 注意，jQuery对象的所有方法都返回一个jQuery对象（可能是新的也可能是自身），这样我们可以进行链式调用，非常方便。
// jQuery对象的css()方法可以这么用：
let div = $("#test-div");
div.css("color"); // '#000033', 获取CSS属性
div.css("color", "#336699"); // 设置CSS属性
div.css("color", ""); // 清除CSS属性

// 为了和JavaScript保持一致，CSS属性可以用'background-color'和'backgroundColor'两种格式。
// css()方法将作用于DOM节点的style属性，具有最高优先级。如果要修改class属性，可以用jQuery提供的下列方法：
div = $("#test-div");
div.hasClass("highlight"); // false， class是否包含highlight
div.addClass("highlight"); // 添加highlight这个class
div.removeClass("highlight"); // 删除highlight这个class

/**
 * 显示和隐藏DOM
 *
 * 要隐藏一个DOM，我们可以设置CSS的display属性为none，利用css()方法就可以实现。不过，要显示这个DOM就需要恢复原有的display属性，这就得先记下来原有的display属性到底是block还是inline还是别的值。
 * 考虑到显示和隐藏DOM元素使用非常普遍，jQuery直接提供show()和hide()方法，我们不用关心它是如何修改display属性的，总之它能正常工作。
 * 注意，隐藏DOM节点并未改变DOM树的结构，它只影响DOM节点的显示。这和删除DOM节点是不同的。
 */
let a = $("a[target=_blank]");
a.hide(); // 隐藏
a.show(); // 显示

/**
 * 获取DOM信息
 *
 * 利用jQuery对象的若干方法，我们直接可以获取DOM的高宽等信息，而无需针对不同浏览器编写特定代码。
 */
// 浏览器可视窗口大小:
$(window).width(); // 800
$(window).height(); // 600

// HTML文档大小:
$(document).width(); // 800
$(document).height(); // 3500

// 某个div的大小:
div = $("#test-div");
div.width(); // 600
div.height(); // 300
div.width(400); // 设置CSS属性 width: 400px，是否生效要看CSS是否有效
div.height("200px"); // 设置CSS属性 height: 200px，是否生效要看CSS是否有效

// attr()和removeAttr()方法用于操作DOM节点的属性：
// <div id="test-div" name="Test" start="1">...</div>
div = $("#test-div");
div.attr("data"); // undefined, 属性不存在
div.attr("name"); // 'Test'
div.attr("name", "Hello"); // div的name属性变为'Hello'
div.removeAttr("name"); // 删除name属性
div.attr("name"); // undefined

// prop()方法和attr()类似，但是HTML5规定有一种属性在DOM节点中可以没有值，只有出现与不出现两种，例如：
// <input id="test-radio" type="radio" name="test" checked value="1">
// attr()和prop()对于属性checked处理有所不同：
let radio = $("#test-radio");
radio.attr("checked"); // 'checked'
radio.prop("checked"); // true

// prop()返回值更合理一些。不过，用is()方法判断更好：
radio = $("#test-radio");
radio.is(":checked"); // true

/**
 * 操作表单
 *
 * 对于表单元素，jQuery对象统一提供val()方法获取和设置对应的value属性：
 */
/*
    <input id="test-input" name="email" value="test">
    <select id="test-select" name="city">
        <option value="BJ" selected>Beijing</option>
        <option value="SH">Shanghai</option>
        <option value="SZ">Shenzhen</option>
    </select>
    <textarea id="test-textarea">Hello</textarea>
*/
let input = $("#test-input"),
  select = $("#test-select"),
  textarea = $("#test-textarea");

input.val(); // 'test'
input.val("abc@example.com"); // 文本框的内容已变为abc@example.com

select.val(); // 'BJ'
select.val("SH"); // 选择框已变为Shanghai

textarea.val(); // 'Hello'
textarea.val("Hi"); // 文本区域已更新为'Hi'
// 可见，一个val()就统一了各种输入框的取值和赋值的问题。
