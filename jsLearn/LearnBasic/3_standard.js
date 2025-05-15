"use strict";
"3. 标准对象";

/**
 * Date
 */
// 创建当前时间
let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

// 通过指定 年月日时分秒毫秒 来创建指定时间，注意月份是0-11而非1-12（历史遗留问题，改不了）
let d = new Date(2025, 4, 15, 20, 27, 30, 123);
console.log(d);

// 通过一个符合ISO 8601格式的字符串来创建指定时间
let d2 = new Date("2025-05-15T20:28:30.123+08:00");
console.log(d2);

// 通过时间戳来创建指定时间
let d3 = new Date(1435146562875);
console.log(d3);

// 时区转化
console.log(d3.toLocaleString());
console.log(d3.toUTCString());

/**
 * RegExp
 * 正则表达式类型
 */
// 直接通过`/正则表达式/`来创建一个正则表达式
let re1 = /ABC\-001/;
// 通过`new RegExp`的方式来创建一个正则表达式
let re2 = new RegExp("ABC\\-001");

// 使用正则表达式进行匹配判断
let re3 = /^\d{3}\-\d{3,8}$/;
console.log(re3.test("010-12345")); // true
console.log(re3.test("010-1234x")); // false
console.log(re3.test("010 12345")); // false

// 正则表达式切分字符串
console.log("a b   c".split(" ")); // 普通版：['a', 'b', '', '', 'c']
console.log("a b   c".split(/\s+/)); // ['a', 'b', 'c']
console.log("a,b, c  d".split(/[\s\,]+/)); // ['a', 'b', 'c', 'd']
console.log("a,b;; c  d".split(/[\s\,\;]+/)); // ['a', 'b', 'c', 'd']

// 正则表达式提取子串，用`()`来表示要提取的分组
let re4 = /^(\d{3})-(\d{3,8})$/;
console.log(re4.exec("010-12345")); // 匹配成功，返回数组：['010-12345', '010', '12345']，分别代表匹配到的整个字符串，后面的表示匹配成功的子串
console.log(re4.exec("010 12345")); // 匹配失败返回 null

// 贪婪匹配
// 正则匹配默认是贪婪匹配，也就是匹配尽可能多的字符。
let re5 = /^(\d+)(0*)$/;
console.log(re5.exec("102300")); // ['102300', '102300', '']

// 设置非贪婪匹配
let re6 = /^(\d+?)(0*)$/;
console.log(re6.exec("102300")); // ['102300', '1023', '00']

// 全局搜索
// 全局匹配类似搜索，因此不能使用/^...$/，那样只会最多匹配一次。
// 其他标签：正则表达式还可以指定i标志，表示忽略大小写；m标志，表示执行多行匹配。
let s = "JavaScript, VBScript, JScript and ECMAScript";
let re7 = /[a-zA-Z]+Script/g; // 等价于 new RegExp("[a-zA-Z]+Script", "g")

// 使用全局匹配:
console.log(re7.exec(s)); // ['JavaScript']
console.log(re7.lastIndex); // 10

console.log(re7.exec(s)); // ['VBScript']
console.log(re7.lastIndex); // 20

console.log(re7.exec(s)); // ['JScript']
console.log(re7.lastIndex); // 29

console.log(re7.exec(s)); // ['ECMAScript']
console.log(re7.lastIndex); // 44

/**
 * JSON
 */
// JavaScript内置了JSON的解析
// JSON序列化(对象=>字符串)
let xiaoming = {
  name: "小明",
  age: 14,
  gender: true,
  height: 1.65,
  grade: null,
  "middle-school": '"W3C" Middle School',
  skills: ["JavaScript", "Java", "Python", "Lisp"],
};

let j1 = JSON.stringify(xiaoming); // 三个参数：js对象, 键的输出名单数组或者对每一个键值对的处理函数，输出缩进内容
console.log(j1);

// JSON反序列化(字符串=>对象)
console.log(JSON.parse("[1,2,3,true]"));
console.log(JSON.parse('{"name":"小明","age":14}'));
console.log(JSON.parse("true")); // true
console.log(JSON.parse("123.45")); // 123.45
// parse还可以再传第二个参数，用来转换解析出的属性
let obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
  if (key === "name") {
    return value + "同学";
  }
  return value;
});
console.log(obj); // {name: '小明同学', age: 14}

// 用浏览器访问OpenWeatherMap的天气API，查看返回的JSON数据，然后返回城市、天气预报等信息：
let url =
  "https://api.openweathermap.org/data/2.5/forecast?q=Beijing,cn&appid=800f49846586c3ba6e7052cfc89af16c";
fetch(url).then((resp) => {
  resp.json().then((data) => {
    let info = {
      city: data.city.name,
      weather: data.list[0].weather[0].main,
      time: data.list[0].dt_txt,
    };
    console.log(JSON.stringify(info, null, "  "));
  });
});
