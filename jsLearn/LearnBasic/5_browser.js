"use strict";
"5. 浏览器";

/**
 * 浏览器对象：
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
 */
