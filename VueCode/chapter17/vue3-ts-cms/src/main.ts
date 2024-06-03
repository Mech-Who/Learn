import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入hyRequest实例
import hyRequest from './service'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)
// 从 @element-plus/icons-vue 中导入所有图标，并进行全局注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store).use(router).mount('#app')

console.log(process.env.NODE_ENV) // development
console.log(process.env.VUE_APP_BASE_URL) // https://coderwhy/org/dev
console.log(process.env.VUE_APP_ENV) // development

// 测试hyRequest的功能
hyRequest.request({
  url: '/get',
  method: 'GET',
  showLoading: true // 通过改变false和true选择是否显示加载进度
})
