# 案例：书籍购物车

## 文件目录

10_书籍购物车-综合案例
│  index.html   # HTML代码
│  index.js     # Vue.js 3 代码
│  README.md    # 说明文件
│  style.css    # 布局样式
└─js
        vue.js  # Vue.js 3 框架

## 搭建步骤

1. 建立基本目录结构并建立引用关系：

    - 在在index.html文件中使用link标签引入style文件
    - 使用script的src属性引入vue.js文件，引入vue.js 3 框架
    - 使用script的src属性引入index.js文件
    - 在index.js中搭建vue3app的基本代码
    - 在style.css文件中做好表格样式代码预设置

2. 搭建书籍列表

    - 在index.html中编写书籍列表的布局

3. 搭建“加购物车”功能

    - 为添加和减少书籍数量按钮绑定函数
    - 为移除书籍按钮绑定函数
    - 为总价格绑定计算属性totalPrice

4. 优化价格和购买数量

    - 为价格添加单位
    - 限制购买数量大于等于1