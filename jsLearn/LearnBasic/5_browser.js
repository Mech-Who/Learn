"use strict";
"5. 浏览器";

/**
 * 浏览器对象
 *
 * window: {innerWidth, innerHeight}
 * navigator: {appName, appVersion, language, platform, userAgent}
 * screen: {width, height, colorDepth}
 * location: {href, protocol, host, port, pathname, search, hash, assign(), reload()}
 * document: {title, cookie, getElementById(), getElementsByTagName(), getElementsByClassName(), querySelector(), querySelectorAll(), createElement()}
 * history: {back(), forward(), pushState(), popState()}
 */

/**
 * 操作DOM
 *
 * HTML文档被浏览器解析后就是一棵DOM树，要改变HTML的结构，就需要通过JavaScript来操作DOM。
 * 始终记住DOM是一个树形结构。操作一个DOM节点实际上就是这么几个操作：
 * - 更新：更新该DOM节点的内容，相当于更新了该DOM节点表示的HTML的内容；
 * - 遍历：遍历该DOM节点下的子节点，以便进行进一步操作；
 * - 添加：在该DOM节点下新增一个子节点，相当于动态增加了一个HTML节点；
 * - 删除：将该节点从HTML中删除，相当于删掉了该DOM节点的内容以及它包含的所有子节点。
 *
 * - document.getElementById()可以直接定位唯一的一个DOM节点。
 * - document.getElementsByTagName()总是返回一组DOM节点。
 * - document.getElementsByClassName()总是返回一组DOM节点。
 * 要精确地选择DOM，可以先定位父节点，再从父节点开始选择，以缩小范围。
 *
 * DOM节点 Element: {children, firstElementChild, lastElementChild， innerHTML, innerText, textContent, style: {color, fontSize, paddingTop}， appendChild(), setAttribute(), insertBefore(), removeChild()}
 * Node是根类型，包含：Element, Comment, CDATA_SECTION, Document 等
 * document就是Document类型，作为根Node。
 *
 * 当你遍历一个父节点的子节点并进行删除操作时，要注意，children属性是一个只读属性，并且它在子节点变化时会实时更新。
 */

/**
 * 操作表单
 *
 * 常见表单：
 * - input: {type: {text, password, radio, checkbox, file, hidden, date(YYYY-MM-DD), datetime(YYYY-MM-DDTHH:MM:SS), datetime-local, color}, value}
 * - select: {value, cheked}
 * - form: {onsubmit, submit()}
 * - button: {onclick, click()}
 *
 * toMD5()：将明文转换为MD5编码。
 */

/**
 * 操作文件
 *
 * 注意：当一个表单包含<input type="file">时，表单的enctype必须指定为multipart/form-data，method必须指定为post，浏览器才能正确编码并以multipart/form-data格式发送表单的数据。
 * 出于安全考虑，浏览器只允许用户点击<input type="file">来选择本地文件，用JavaScript对<input type="file">的value赋值是没有任何效果的。当用户选择了上传某个文件后，JavaScript也无法获得该文件的真实路径：
 * 通常，上传的文件都由后台服务器处理，JavaScript可以在提交表单时对文件扩展名做检查，以便防止用户上传无效格式的文件：
 *
 * File API
 *
 * 随着HTML5的普及，新增的File API允许JavaScript读取文件内容，获得更多的文件信息。
 * HTML5的File API提供了File和FileReader两个主要对象，可以获得文件信息并读取文件。
 *
 * File: {name, size, lastModified, type}
 * FileReader: {onload, readAsDataURL()}
 *
 * 以DataURL的形式读取到的文件是一个字符串，类似于data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...，常用于设置图像。如果需要服务器端处理，把字符串base64,后面的字符发送给服务器并用Base64解码就可以得到原始文件的二进制内容。
 *
 * JavaScript的一个重要的特性就是单线程执行模式。
 * 在JavaScript中，浏览器的JavaScript执行引擎在执行JavaScript代码时，总是以单线程模式执行，也就是说，任何时候，JavaScript代码都不可能同时有多于1个线程在执行。
 *
 * 你可能会问，单线程模式执行的JavaScript，如何处理多任务？
 * 在JavaScript中，执行多任务实际上都是异步调用，比如上面的代码：
 * ```reader.readAsDataURL(file);```
 * 就会发起一个异步操作来读取文件内容。因为是异步操作，所以我们在JavaScript代码中就不知道什么时候操作结束，因此需要先设置一个回调函数：
 * ```
 * reader.onload = function(e) {
 *   // 当文件读取完成后，自动调用此函数;
 * };
 * ```
 * 当文件读取完成后，JavaScript引擎将自动调用我们设置的回调函数。执行回调函数时，文件已经读取完毕，所以我们可以在回调函数内部安全地获得文件内容。
 */

/**
 * AJAX
 *
 * AJAX不是JavaScript的规范，它只是一个哥们“发明”的缩写：Asynchronous JavaScript and XML，意思就是用JavaScript执行异步网络请求。
 * 如果仔细观察一个Form的提交，你就会发现，一旦用户点击“Submit”按钮，表单开始提交，浏览器就会刷新页面，然后在新页面里告诉你操作是成功了还是失败了。如果不幸由于网络太慢或者其他原因，就会得到一个404页面。
 * 这就是Web的运作原理：一次HTTP请求对应一个页面。
 *
 * 如果要让用户留在当前页面中，同时发出新的HTTP请求，就必须用JavaScript发送这个新请求，接收到数据后，再用JavaScript更新页面，这样一来，用户就感觉自己仍然停留在当前页面，但是数据却可以不断地更新。
 *
 * 最早大规模使用AJAX的就是Gmail，Gmail的页面在首次加载后，剩下的所有数据都依赖于AJAX来更新。
 * 用JavaScript写一个完整的AJAX代码并不复杂，但是需要注意：AJAX请求是异步执行的，也就是说，要通过回调函数获得响应。
 *
 * 在现代浏览器上写AJAX主要依靠XMLHttpRequest对象，如果不考虑早期浏览器的兼容性问题，现代浏览器还提供了原生支持的Fetch API，以Promise方式提供。使用Fetch API发送HTTP请求代码如下：
 * ```
 * async function get(url) {
 *   let resp = await fetch(url);
 *   let result = await resp.text();
 *   return result;
 * }
 *
 * // 发送异步请求:
 * get('./content.html').then(data => {
 *   let textarea = document.getElementById('fetch-response-text');
 *   textarea.value = data;
 * });
 * ```
 * 使用Fetch API配合async写法，代码更加简单。
 * Fetch API的详细用法可以参考MDN文档。(`https://developer.mozilla.org/docs/Web/API/Fetch_API`)
 *
 * 安全限制
 *
 * 上面代码的URL使用的是相对路径。如果你把它改为'https://www.sina.com.cn/'，再运行，肯定报错。在Chrome的控制台里，还可以看到错误信息。
 * 这是因为浏览器的同源策略导致的。默认情况下，JavaScript在发送AJAX请求时，URL的域名必须和当前页面完全一致。
 * 完全一致的意思是，域名要相同（www.example.com和example.com不同），协议要相同（http和https不同），端口号要相同（http默认是:80端口，它和:8080就不同）。有的浏览器口子松一点，允许端口不同，大多数浏览器都会严格遵守这个限制。
 *
 * 那是不是用JavaScript无法请求外域（就是其他网站）的URL了呢？方法还是有的，大概有这么几种：
 * 1. 通过Flash插件发送HTTP请求，这种方式可以绕过浏览器的安全限制，但必须安装Flash，并且跟Flash交互。不过Flash用起来麻烦，而且现在用得也越来越少了。
 * 2. 通过在同源域名下架设一个代理服务器来转发，JavaScript负责把请求发送到代理服务器：
 * '/proxy?url=https://www.sina.com.cn'
 * 代理服务器再把结果返回，这样就遵守了浏览器的同源策略。这种方式麻烦之处在于需要服务器端额外做开发。
 * 3. JSONP，它有个限制，只能用GET请求，并且要求返回JavaScript。这种方式跨域实际上是利用了浏览器允许跨域引用JavaScript资源：
 * ```
 * <html>
 * <head>
 *   <script src="http://example.com/abc.js"></script>
 *   ...
 * </head>
 * <body>
 * ...
 * </body>
 * </html>
 * ```
 * JSONP通常以函数调用的形式返回，例如，返回JavaScript内容如下：
 * ```foo('data');```
 * 这样一来，我们如果在页面中先准备好foo()函数，然后给页面动态加一个<script>节点，相当于动态读取外域的JavaScript资源，最后就等着接收回调了。
 *
 * CORS
 *
 * 如果浏览器支持HTML5，那么就可以一劳永逸地使用新的跨域策略：CORS了。
 * CORS全称Cross-Origin Resource Sharing，是HTML5规范定义的如何跨域访问资源。
 *
 * 了解CORS前，我们先搞明白概念：
 * Origin表示本域，也就是浏览器当前页面的域。当JavaScript向外域（如sina.com）发起请求后，浏览器收到响应后，首先检查Access-Control-Allow-Origin是否包含本域，如果是，则此次跨域请求成功，如果不是，则请求失败，JavaScript将无法获取到响应的任何数据。
 *
 * 假设本域是my.com，外域是sina.com，只要响应头Access-Control-Allow-Origin为http://my.com，或者是*，本次请求就可以成功。
 * 可见，跨域能否成功，取决于对方服务器是否愿意给你设置一个正确的Access-Control-Allow-Origin，决定权始终在对方手中。
 * 上面这种跨域请求，称之为“简单请求”。简单请求包括GET、HEAD和POST（POST的Content-Type类型 仅限application/x-www-form-urlencoded、multipart/form-data和text/plain），并且不能出现任何自定义头（例如，X-Custom: 12345），通常能满足90%的需求。
 *
 * 无论你是否需要用JavaScript通过CORS跨域请求资源，你都要了解CORS的原理。最新的浏览器全面支持HTML5。在引用外域资源时，除了JavaScript和CSS外，都要验证CORS。例如，当你引用了某个第三方CDN上的字体文件时：
 * ```
 * // CSS
 * @font-face {
 *   font-family: 'FontAwesome';
 *   src: url('http://cdn.com/fonts/fontawesome.ttf') format('truetype');
 * }
 * ```
 * 如果该CDN服务商未正确设置Access-Control-Allow-Origin，那么浏览器无法加载字体资源。
 * 对于PUT、DELETE以及其他类型如application/json的POST请求，在发送AJAX请求之前，浏览器会先发送一个OPTIONS请求（称为preflighted请求）到这个URL上，询问目标服务器是否接受：
 * ```
 * OPTIONS /path/to/resource HTTP/1.1
 * Host: bar.com
 * Origin: http://my.com
 * Access-Control-Request-Method: POST
 * ```
 * 服务器必须响应并明确指出允许的Method：
 * ```
 * HTTP/1.1 200 OK
 * Access-Control-Allow-Origin: http://my.com
 * Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS
 * Access-Control-Max-Age: 86400
 * ```
 * 浏览器确认服务器响应的Access-Control-Allow-Methods头确实包含将要发送的AJAX请求的Method，才会继续发送AJAX，否则，抛出一个错误。
 * 由于以POST、PUT方式传送JSON格式的数据在REST中很常见，所以要跨域正确处理POST和PUT请求，服务器端必须正确响应OPTIONS请求。
 * 需要深入了解CORS的童鞋请移步MDN文档和W3C文档。
 * MDN文档: https://developer.mozilla.org/docs/Web/HTTP/CORS
 * W3C文档: http://www.w3.org/TR/cors/
 */

/**
 * Promise
 *
 * 在JavaScript的世界中，所有代码都是单线程执行的。
 * 由于这个“缺陷”，导致JavaScript的所有网络操作，浏览器事件，都必须是异步执行。异步执行可以用回调函数实现：
 * ```
 * function callback() {
 *   console.log('Done');
 * }
 * console.log('before setTimeout()');
 * setTimeout(callback, 1000); // 1秒钟后调用callback函数
 * console.log('after setTimeout()');
 * ```
 * setTimeout() => 设置定时器，一段时间后执行回调函数
 * 可见，异步操作会在将来的某个时间点触发一个函数调用。
 *
 * AJAX就是典型的异步操作：
 * ```
 * request.onreadystatechange = function () {
 *   if (request.readyState === 4) {
 *     if (request.status === 200) {
 *       return success(request.responseText);
 *     } else {
 *         return fail(request.status);
 *     }
 *   }
 * }
 * ```
 * 把回调函数success(request.responseText)和fail(request.status)写到一个AJAX操作里很正常，但是不好看，而且不利于代码复用。
 * 有没有更好的写法？比如写成这样：
 * ```
 * let ajax = ajaxGet('http://...');
 * ajax.ifSuccess(success)
 *     .ifFail(fail);
 * ```
 * 这种链式写法的好处在于，先统一执行AJAX逻辑，不关心如何处理结果，然后，根据结果是成功还是失败，在将来的某个时候调用success函数或fail函数。
 * 古人云：“君子一诺千金”，这种“承诺将来会执行”的对象在JavaScript中称为Promise对象。
 * Promise有各种开源实现，在ES6中被统一规范，由浏览器直接支持。
 * Promise最大的好处是在异步执行的流程中，把执行代码和处理结果的代码清晰地分离了
 * Promise还可以做更多的事情，比如，有若干个异步任务，需要先做任务1，如果成功后再做任务2，任何任务失败则不再继续并执行错误处理函数。
 * 要串行执行这样的异步任务，不用Promise需要写一层一层的嵌套代码。有了Promise，我们只需要简单地写：
 * ```
 * job1.then(job2).then(job3).catch(handleError);
 * ```
 * 其中，job1、job2和job3都是Promise对象。
 *
 * setTimeout可以看成一个模拟网络等异步执行的函数。
 * 除了串行执行若干异步任务外，Promise还可以并行执行异步任务。
 * ```
 * let p1 = new Promise(...);
 * let p2 = new Promise(...);
 * Promise.all([p1, p2]).then(...).catch(...);
 * ```
 *
 * 有些时候，多个异步任务是为了容错。比如，同时向两个URL读取用户的个人信息，只需要获得先返回的结果即可。这种情况下，用Promise.race()实现：
 * ```
 * let p1 = new Promise(...);
 * let p2 = new Promise(...);
 * Promise.race([p1, p2]).then(...).catch(...);
 * ```
 * 如果我们组合使用Promise，就可以把很多异步任务以并行和串行的方式组合起来执行。
 */

/**
 * async函数
 *
 * 我们说JavaScript异步操作需要通过Promise实现，一个Promise对象在操作网络时是异步的，等到返回后再调用回调函数，执行正确就调用then()，执行错误就调用catch()，虽然异步实现了，不会让用户感觉到页面“卡住”了，但是一堆then()、catch()写起来麻烦看起来也乱。
 *
 * ```
 * async function get(url) {
 *   let resp = await fetch(url);
 *   let result = await resp.json();
 *   return result;
 * }
 * ```
 * 使用async function可以定义一个异步函数，异步函数和Promise可以看作是等价的，在async function内部，用await调用另一个异步函数，写起来和同步代码没啥区别，但执行起来是异步的。
 * ```let resp = await fetch(url);```
 * 自动实现了异步调用，它和下面的Promise代码等价：
 * ```
 * let promise = fetch(url);
 * promise.then((resp) => {
 *   // 拿到resp
 * });
 * ```
 * 如果我们要实现catch()怎么办？用Promise的写法如下：
 * ```
 * let promise = fetch(url);
 * promise.then((resp) => {
 *   // 拿到resp
 * }).catch(e => {
 * // 出错了
 * });
 * ```
 * 用await调用时，直接用传统的try { ... } catch：
 * ```
 * async function get(url) {
 *   try {
 *     let resp = await fetch(url);
 *     let result = await resp.json();
 *     return result;
 *   } catch (e) {
 *     // 出错了
 *   }
 * }
 * ```
 * 用async定义异步函数，用await调用异步函数，写起来和同步代码差不多，但可读性大大提高。
 * 需要特别注意的是，await调用必须在async function中，不能在传统的同步代码中调用。
 *
 * 那么问题来了，一个同步function怎么调用async function呢？
 * 首先，普通function直接用await调用异步函数将报错;
 * 如果把await去掉，调用实际上发生了，但我们拿不到结果，因为我们拿到的并不是异步结果，而是一个Promise对象;
 *
 * 因此，在普通function中调用async function，不能使用await，但可以直接调用async function拿到Promise对象，后面加上then()和catch()就可以拿到结果或错误了。
 *
 * 因此，定义异步任务时，使用async function比Promise简单，调用异步任务时，使用await比Promise简单，捕获错误时，按传统的try...catch写法，也比Promise简单。只要浏览器支持，完全可以用async简洁地实现异步操作。
 */

/**
 * Canvas
 *
 * Canvas是HTML5新增的组件，它就像一块幕布，可以用JavaScript在上面绘制各种图表、动画等。
 * 没有Canvas的年代，绘图只能借助Flash插件实现，页面不得不用JavaScript和Flash进行交互。有了Canvas，我们就再也不需要Flash了，直接使用JavaScript完成绘制。
 * 一个Canvas定义了一个指定尺寸的矩形框，在这个范围内我们可以随意绘制：
 * ```
 * <canvas id="test-canvas" width="300" height="200"></canvas>
 * ```
 * 由于浏览器对HTML5标准支持不一致，所以，通常在<canvas>内部添加一些说明性HTML代码，如果浏览器支持Canvas，它将忽略<canvas>内部的HTML，如果浏览器不支持Canvas，它将显示<canvas>内部的HTML。
 *
 * getContext('2d')方法让我们拿到一个CanvasRenderingContext2D对象，所有的绘图操作都需要通过这个对象完成。
 * ```
 * let ctx = canvas.getContext('2d');
 * ```
 * 如果需要绘制3D怎么办？HTML5还有一个WebGL规范，允许在Canvas中绘制3D图形：
 * ```
 * gl = canvas.getContext("webgl");
 * ```
 * 本节我们只专注于绘制2D图形。
 *
 * 我们可以在Canvas上绘制各种形状。在绘制前，我们需要先了解一下Canvas的坐标系统：
 * Canvas的坐标以左上角为原点，水平向右为X轴，垂直向下为Y轴，以像素为单位，所以每个点都是非负整数。
 *
 * `CanvasRenderingContext2D` 对象有若干方法来绘制图形：
 * ```
 * let
 *   canvas = document.getElementById('test-shape-canvas'),
 *   ctx = canvas.getContext('2d');
 *
 * ctx.clearRect(0, 0, 200, 200); // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
 * ctx.fillStyle = '#dddddd'; // 设置颜色
 * ctx.fillRect(10, 10, 130, 130); // 把(10,10)位置大小为130x130的矩形涂色
 * // 利用Path绘制复杂路径:
 * let path=new Path2D();
 * path.arc(75, 75, 50, 0, Math.PI*2, true);
 * path.moveTo(110,75);
 * path.arc(75, 75, 35, 0, Math.PI, false);
 * path.moveTo(65, 65);
 * path.arc(60, 65, 5, 0, Math.PI*2, true);
 * path.moveTo(95, 65);
 * path.arc(90, 65, 5, 0, Math.PI*2, true);
 * ctx.strokeStyle = '#0000ff';
 * ctx.stroke(path);
 * ```
 *
 * 绘制文本
 *
 * 绘制文本就是在指定的位置输出文本，可以设置文本的字体、样式、阴影等，与CSS完全一致：
 * ```
 * let
 *   canvas = document.getElementById('test-text-canvas'),
 *   ctx = canvas.getContext('2d');
 *
 * ctx.fillStyle = '#fff';
 * ctx.fillRect(0, 0, 300, 100);
 * ctx.shadowOffsetX = 2;
 * ctx.shadowOffsetY = 2;
 * ctx.shadowBlur = 2;
 * ctx.shadowColor = '#ccc';
 * ctx.font = '28px Arial';
 * ctx.fillStyle = '#999';
 * ctx.fillText('带阴影的文字', 20, 40);
 * ```
 *
 * Canvas除了能绘制基本的形状和文本，还可以实现动画、缩放、各种滤镜和像素转换等高级操作。如果要实现非常复杂的操作，考虑以下优化方案：
 * - 通过创建一个不可见的Canvas来绘图，然后将最终绘制结果复制到页面的可见Canvas中；
 * - 尽量使用整数坐标而不是浮点数；
 * - 可以创建多个重叠的Canvas绘制不同的层，而不是在一个Canvas中绘制非常复杂的图；
 * - 背景图片如果不变可以直接用 `<img>` 标签并放到最底层。
 */
