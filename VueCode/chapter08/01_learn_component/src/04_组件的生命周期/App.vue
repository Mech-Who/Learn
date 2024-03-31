<template>
  <div class="app">
    <button @click="isShowHome = !isShowHome">控制Home组件的创建和销毁</button>
    <template v-if="isShowHome">
      <home></home>
    </template>
  </div>
</template>

<script>
  import Home from "./Home.vue"
  export default {
    components: {
      Home
    },
    data() {
      return {
        isShowHome: true // 为true时创建组件，为false时销毁组件
      }
    }
  }
</script>

<style scoped>
</style>