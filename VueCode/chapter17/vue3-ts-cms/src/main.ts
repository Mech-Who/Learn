import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入hyRequest实例
import hyRequest from './service'
import 'normalize.css'
import './assert/css/index.less'

createApp(App).use(store).use(router).mount('#app')

console.log(process.env.NODE_ENV) // development
console.log(process.env.VUE_APP_BASE_URL) // https://coderwhy/org/dev
console.log(process.env.VUE_APP_ENV) // development

// 测试hyRequest的功能
hyRequest.request({
  url: '/get',
  method: 'GET',
  showLoading: true // 通过改变false和true选择是否显示加载进度
})
