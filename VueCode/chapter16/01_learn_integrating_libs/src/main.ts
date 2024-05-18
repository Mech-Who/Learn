import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// import './services/01-learn-axios-get'
// import './services/02-learn-axios-get-ts'
// import './services/03-learn-axios-post'
// import './services/04-learn-axios-config'
// import './services/05-learn-axios-all'
// import './services/06-learn-axios-interceptors'
import './services/07-learn-axios-instance'

// 全局引入 Element Plus 组件库
// import ElementPlus from 'element-plus'
// 全局引入 Element Plus 组件库的样式
// import 'element-plus/dist/index.css'

createApp(App)
  .use(router)
  .use(store)
  // .use(ElementPlus) // 3. 安装Element Plus组件库
  .mount('#app')
