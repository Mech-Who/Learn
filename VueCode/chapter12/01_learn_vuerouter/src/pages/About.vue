<template>
  <div class="about">
    About Page
    <!-- 1. 使用template直接获取query参数 -->
    <p>{{ $route.query.name }} - {{ $route.query.age }}</p>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
export default {
  name: "About",
  setup() {
    const route = useRoute();
    // 获取其它参数
    console.log(route.name, route.meta);
    // 2. 通过route获取query参数，打印{name: 'coder', age: '20'}
    console.log(route.query);
    return {}
  }
}
</script>