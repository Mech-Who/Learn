<template>
  <div class="login">
    <button @click="loginClick">登录</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  setup(){
    const router = useRouter();
    const loginClick = () => {  // 1. 模拟登录功能
      window.sessionStorage.setItem("token", "why") // 2. 存储登录信息
      router.push("/home")  // 3. 跳转到首页
    }
    return {
      loginClick
    }
  }
}
</script>

<style scoped>
</style>