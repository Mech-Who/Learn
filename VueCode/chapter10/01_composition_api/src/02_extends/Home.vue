<template>
  <div class="home" style="border:1px solid #ddd;margin: 10px">
    <!-- 2. 下面使用了BasePage组件定义的数据 -->
    <h4>{{ title }}</h4>
    <button @click="bar">点击调用BasePage组件定义的bar方法</button>
  </div>
</template>

<script>
import BasePage from './BasePage.vue';
export default {
  // 1. 复用BasePage.vue组件的script标签中定义的选项
  extends: BasePage
}
</script>

<style scoped>
</style>