import { createApp } from 'vue'
import registerDirectives from './directives/index.js'
import App from './App.vue'

let app = createApp(App)
// 1. 自定义v-focus全局指令，该指令可以全局使用
app.directive("focus", {
  mounted(el, bindings) {
    console.log("focus mounted");
    el.focus();
  }
})
// 3. 自定义全局指令v-format-time
registerDirectives(app);

app.mount('#app')
