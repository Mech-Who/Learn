import dayjs from 'dayjs';  // 需安装依赖
export default function(app) {  // 接收App实例，目的是调用app.directive来定义全局指令
  app.directive("format-time", {  // 参数一：指令的名称。参数二：指令对象
    created(el, bindings) {
      bindings.formatString = "YYYY-MM-DD HH:mm:ss" // 1. 初始化默认格式
      if (bindings.value) {
        bindings.formatString = bindings.value; // 2. 使用用户指定的格式
      }
    },
    mounted(el, bindings) {
      const textContent = el.textContent; // 3. 获取某个元素的内容
      let timestamp = parseInt(textContent);
      if (textContent.length == 10) {
        timestamp = timestamp * 1000  // 4. 时间戳是秒单位，转换为毫秒单位
      }
      // 5. 借用dayjs库，将timestamp时间戳转换为formatString指定的格式化
      el.textContent = dayjs(timestamp).format(bindings.formatString);
    }
  })
}