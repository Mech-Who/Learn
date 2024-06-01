import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入hyRequest实例
import hyRequest from './service'

createApp(App).use(store).use(router).mount('#app')

// 测试hyRequest的功能
hyRequest.request({
  url: '/get',
  method: 'GET',
  showLoading: true // 通过改变false和true选择是否显示加载进度
})
