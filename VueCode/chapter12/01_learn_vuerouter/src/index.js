import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// 1. 导入页面组件，也称路由组件或页面组件
import Home from './pages/Home.vue'
import About from './pages/About.vue'

const routes = [ // 2. 配置路由映射表（路径 -> 组件）
  {
    path: '/home',
    component: Home
  },{
    path: '/about',
    component: About
  }
]

// 3. 导出创建好的路由对象
const router = createRouter({
  routes,
  history: createWebHashHistory() // 4. 指定用hash路由
  // history: createWebHistory()  // 4. 指定用history路由
})

export default router