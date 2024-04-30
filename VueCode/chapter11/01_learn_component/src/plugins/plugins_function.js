export default function(app) {
  // 1. 插件是为App实例添加一个全局属性$name
  app.config.globalProperties.$name = "coderwhy"
  // 可以继续为App实例添加全局属性、方法、指令、组件、mixin等
}