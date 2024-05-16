import { createApp } from 'vue'
// 4. 导入文件
import nhItImg from './img/nhlt.jpg'  // ok
// 5. 导入lodash模块
// 声明之后再使用就不会报错了
import lodash from 'lodash' // 报错：Could not find a declaration file for module 'lodash'
import App from './App.vue'

createApp(App).mount('#app')

// 1. 使用全局变量
// 在shims-vue.d.ts中声明后就可以正常使用了
console.log(appName); // 报错：Cannot find name 'appName'.
console.log(appVersion); // 报错：Cannot find name 'appVersion'.

// 2. 使用全局函数
console.log(getAppName());  // ok

// 3. 使用全局类
const p = new Person("why", 18) // ok
console.log(p);

