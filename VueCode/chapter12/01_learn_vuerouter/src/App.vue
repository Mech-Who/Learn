<template>
  <div class="nav">
    <!-- 1. 切换路由，即切换页面 -->
    <router-link class="tab" to="/home">首页</router-link>
    <router-link class="tab" to="/about">关于</router-link>
    <!-- <router-link class="tab" to="/user/why/">用户</router-link> -->
    <router-link class="tab" to="/user/why/id/0001">用户</router-link>
    <button @click="jumpToAbout">关于</button>
  </div>
  <!-- 2. 路由组件的占位 -->
  <router-view></router-view>
</template>

<script>
import { useRoute } from 'vue-router';
import router from './router';
export default {
  name: 'App',
  setup() {
    const route = useRoute()  // 1. 获取route对象，即创建爱你的路由对象
    const jumpToAbout = () => { // 2. 监听button单击事件
      // 3. 跳转到“关于”页面，Options API中通过this.$router.push调用方法。
      // 3.1 接收字符串类型
      // router.push("/about")
      // 3.2 接收对象类型的参数，功能和上面一样
      router.push({
        // 3.3 指定跳转页面路径
        path: "/about"
      })
    }
    return { jumpToAbout }
  }
}
</script>

<style>
.nav {
  margin: 20px 0px;
}

.tab {
  border: 1px solid #ddd;
  margin-right: 8px;
  padding: 2px 20px;
  text-decoration: none;
}
</style>
