import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [ // 2. 配置路由映射表（路径 -> 组件）
  {
    path: '/',
    redirect: '/home' // 1. 路由默认路径（/），重定向到/home路径 
  },{
    path: '/home',
    // 1. import函数的参数中添加了魔法注释webpackChunkName
    component: () => import(/* webpackChunkName: "home-chunk" */ '../pages/Home.vue')  // 2. 路由懒加载，加载Home和About组件
  },{
    path: '/about',
    component: () => import(/* webpackChunkName: "about-chunk" */ '../pages/About.vue')
  }
]

// 3. 导出创建好的路由对象
const router = createRouter({
  routes,
  // history: createWebHashHistory() // 4. 指定用hash路由
  history: createWebHistory()  // 4. 指定用history路由
})

export default router