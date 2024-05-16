import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// 1. 使用全局变量
// 在shims-vue.d.ts中声明后就可以正常使用了
console.log(appName); // 报错：Cannot find name 'appName'.
console.log(appVersion); // 报错：Cannot find name 'appVersion'.

// 2. 使用全局函数
console.log(getAppName());  // ok
