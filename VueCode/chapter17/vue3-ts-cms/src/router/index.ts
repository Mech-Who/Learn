import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // 访问默认路由时，重定向到登录页面
    redirect: '/main'
  },
  {
    // 登录页面的路由
    path: '/login',
    // 该页面的名称
    name: 'login',
    // 懒加载页面组件
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/login/login.vue')
  },
  {
    // 首页的路由
    path: '/main',
    name: 'main',
    component: () =>
      import(/* webpackChunkName: "main" */ '@/views/main/main.vue'),
    children: []
  },
  {
    // 没有匹配的路径时显示该页面
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () =>
      import(
        /* webpackChunkName: "notFound" */ '@/views/not-found/not-found.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 路由守卫
router.beforeEach((to) => {
  // 如果不是登录页面，验证登录权限
  if (to.path !== '/login') {
    // 如果没有登录权限，则进入登录页面
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }

  if (to.path === '/main') {
    return '/main/system/user' // 用户登录成功，跳转到用户列表页（注意：最好动态获取页面路径）
  }
})

export default router
