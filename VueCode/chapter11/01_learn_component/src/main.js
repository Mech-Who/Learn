import { createApp } from 'vue'
import App from './03_自定义指令/App.vue'

let app = createApp(App)
// 1. 自定义v-focus全局指令，该指令可以全局使用
app.directive("focus", {
  mounted(el, bindings) {
    console.log("focus mounted");
    el.focus();
  }
})

app.mount('#app')
