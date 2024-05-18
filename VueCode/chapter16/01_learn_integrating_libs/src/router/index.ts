import {createRouter, createWebHashHistory} from 'vue-router'
// 1. 纯类型的导入，即从vue-router包的vue-router.d.ts文件中导入
import type {RouteRecordRaw, Router} from 'vue-router'

// 2. 声明routes的类型
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },{
    path: '/home',
    component: () => import('../pages/home.vue')
  },{
    path: '/about',
    component: () => import('../pages/about.vue')
  }
]

// 3. 声明router的类型
const router: Router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
