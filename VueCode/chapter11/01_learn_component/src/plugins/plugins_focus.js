import { apply } from "core-js/fn/reflect"

export default {
  install(app) {
    // 插件的功能是添加一个自定义指令 v-focus
    app.directive("focus", {
      mounted(el, bindings){
        el.focus()
      }
    })
  }
}