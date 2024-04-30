import { createApp } from 'vue'
import registerDirectives from './directives/index.js'
// import pluginObject from './plugins/plugins_object.js'
import pluginFunction from './plugins/plugins_function.js'
import App from './06_nexttick的使用/App.vue'

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

// app.use(pluginObject);  // 4. 安装插件时，会执行插件的install函数

app.use(pluginFunction) // 4. 使用app.use函数安装插件

app.mount('#app')
