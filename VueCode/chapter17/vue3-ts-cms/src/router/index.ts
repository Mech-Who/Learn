import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // 访问默认路由时，重定向到登录页面
    redirect: '/login'
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

export default router
