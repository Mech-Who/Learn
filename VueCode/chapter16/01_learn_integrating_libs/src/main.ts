import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// 全局引入 Element Plus 组件库
// import ElementPlus from 'element-plus'
// 全局引入 Element Plus 组件库的样式
// import 'element-plus/dist/index.css'

createApp(App)
  .use(router)
  .use(store)
  // .use(ElementPlus) // 3. 安装Element Plus组件库
  .mount('#app')
