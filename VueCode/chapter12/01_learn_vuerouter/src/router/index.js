import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [ // 2. 配置路由映射表（路径 -> 组件）
  {
    path: '/',
    redirect: '/home' // 3. 路由默认路径（/），重定向到/home路径 
  },{
    path: '/home',
    // 4. 路由懒加载，加载Home和About组件
    // 5. import函数的参数中添加了魔法注释webpackChunkName
    component: () => import(/* webpackChunkName: "home-chunk" */ '../pages/Home.vue'),
    children: [ // 1. 在Home页面下注册二级路由
      {
        path: "home",
        name: "home",
        // 2. 访问/home路径时，重定向到/home/message路径
        redirect: "/home/message"
      },{
        path: "message",  // 2. 二级路由path不支持/message或/home/message，直接填message即可
        component: () => import("../pages/HomeMessage.vue")
      },{
        path: "shops",
        component: () => import("../pages/HomeShops.vue")
      }
    ]
  },{
    path: '/login',
    component: () => import("../pages/Login.vue")
  },{
    path: '/about',
    // 6. 指定路由名称
    name: 'about',
    // 7. 为路由添加自定义数据
    meta: {
      name: 'why',
      age: 18
    },
    component: () => import(/* webpackChunkName: "about-chunk" */ '../pages/About.vue')
  },{
    // 8. 动态路径参数以冒号开始，例如，:username代表动态路径参数
    path: '/user/:username/id/:id',
    component: () => import('../pages/User.vue')
  },{
    // 1. 使用通配符*来匹配任意路径，通配符由应放在最后的
    path: "/:pathMatch(.*)",  // product/1001 得到 product/1001
    path: "/:pathMatch(.*)*", // product/1001 得到 ["product", "1001"]
    component: () => import("../pages/NotFound.vue")
  }
]

// 3. 导出创建好的路由对象
const router = createRouter({
  routes,
  // history: createWebHashHistory() // 4. 指定用hash路由
  history: createWebHistory()  // 4. 指定用history路由
})

// 3. 商品分类页面的路由配置
const categoryRoute = {
  path: "/category",
  component: () => import('../pages/Category.vue')
}

// 4. 动态添加顶级路由对象
router.addRoute(categoryRoute)

// 5. 为现有路由（home）添加二级路由
router.addRoute("home", {
  path: "comment",
  component: () => import("../pages/HomeComment.vue")
})

// 6. 全局前置守卫
router.beforeEach((to, from) => {
  if (to.path !== '/login') { // 如果不是登录页面
    const token = window.sessionStorage.getItem('token')
    if (!token) { // 通过token判断用户是否登录，没登录则导航到login页面
      return {
        path: '/login'
      }
    }
  }
})

export default router