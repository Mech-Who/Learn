"use strict";
"7. JQuery -> 动画";

/**
 * 用JavaScript实现动画，原理非常简单：我们只需要以固定的时间间隔（例如，0.1秒），每次把DOM元素的CSS样式修改一点（例如，高宽各增加10%），看起来就像动画了。
 * 但是要用JavaScript手动实现动画效果，需要编写非常复杂的代码。如果想要把动画效果用函数封装起来便于复用，那考虑的事情就更多了。
 * 使用jQuery实现动画，代码已经简单得不能再简化了：只需要一行代码！
 *
 * 让我们先来看看jQuery内置的几种动画样式：
 */

/**
 * show/hide
 */
// 直接以无参数形式调用show()和hide()，会显示和隐藏DOM元素。但是，只要传递一个时间参数进去，就变成了动画。
let div1 = $("#test-show-hide");
div1.hide(3000); // 在3秒钟内逐渐消失

// 时间以毫秒为单位，但也可以是'slow'，'fast'这些字符串：
let div2 = $("#test-show-hide");
div2.show("slow"); // 在0.6秒钟内逐渐显示

// toggle()方法则根据当前状态决定是show()还是hide()。

/**
 * slideUp / slideDown
 */
// 你可能已经看出来了，show()和hide()是从左上角逐渐展开或收缩的，而slideUp()和slideDown()则是在垂直方向逐渐展开或收缩的。
// slideUp()把一个可见的DOM元素收起来，效果跟拉上窗帘似的，slideDown()相反，而slideToggle()则根据元素是否可见来决定下一步动作：
let div = $("#test-slide");
div.slideUp(3000); // 在3秒钟内逐渐向上消失

/**
 * fadeIn / fadeOut
 */
// fadeIn()和fadeOut()的动画效果是淡入淡出，也就是通过不断设置DOM元素的opacity属性来实现，而fadeToggle()则根据元素是否可见来决定下一步动作：
let div3 = $("#test-fade");
div3.fadeOut("slow"); // 在0.6秒内淡出

/**
 * 自定义动画
 */
// 如果上述动画效果还不能满足你的要求，那就祭出最后大招：animate()，它可以实现任意动画效果，我们需要传入的参数就是DOM元素最终的CSS状态和时间，jQuery在时间段内不断调整CSS直到达到我们设定的值：
let div4 = $("#test-animate");
div4.animate(
  {
    opacity: 0.25,
    width: "256px",
    height: "256px",
  },
  3000
); // 在3秒钟内CSS过渡到设定值
// animate()还可以再传入一个函数，当动画结束时，该函数将被调用：
let div5 = $("#test-animate");
div5.animate(
  {
    opacity: 0.25,
    width: "256px",
    height: "256px",
  },
  3000,
  function () {
    console.log("动画已结束");
    // 恢复至初始状态:
    $(this).css("opacity", "1.0").css("width", "128px").css("height", "128px");
  }
);
// 实际上这个回调函数参数对于基本动画也是适用的。
// 有了animate()，你就可以实现各种自定义动画效果了：

/**
 * 串行动画
 */
// jQuery的动画效果还可以串行执行，通过delay()方法还可以实现暂停，这样，我们可以实现更复杂的动画效果，而代码却相当简单：
let div6 = $("#test-animates");
// 动画效果：slideDown - 暂停 - 放大 - 暂停 - 缩小
div6
  .slideDown(2000)
  .delay(1000)
  .animate(
    {
      width: "256px",
      height: "256px",
    },
    2000
  )
  .delay(1000)
  .animate(
    {
      width: "128px",
      height: "128px",
    },
    2000
  );

/**
 * 为什么有的动画没有效果
 *
 * 你可能会遇到，有的动画如slideUp()根本没有效果。这是因为jQuery动画的原理是逐渐改变CSS的值，如height从100px逐渐变为0。但是很多不是block性质的DOM元素，对它们设置height根本就不起作用，所以动画也就没有效果。
 * 此外，jQuery也没有实现对background-color的动画效果，用animate()设置background-color也没有效果。这种情况下可以使用CSS3的transition实现动画效果。
 */
