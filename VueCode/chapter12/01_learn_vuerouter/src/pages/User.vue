<template>
  <div class="user">
    <!-- 1. 在template中获取路径参数值 -->
    <h4>User Page: {{ $route.params.username }}</h4>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  created() {
    // 2. 在created中获取路径参数值
    console.log(this.$route.params.username);
  },
  setup() {
    const route = useRoute()
    // 3. 使用useRoute函数获取路径参数值
    console.log(route.params.username);
  }
}
</script>