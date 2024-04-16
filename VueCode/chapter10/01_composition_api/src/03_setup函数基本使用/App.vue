<template>
  <div class="app" style="border: 1px solid #ddd;margin: 4px">
    App组件
    <!-- <setup-props message="学习setup函数的参数"></setup-props> -->
    <setup-context message="学习setup context参数" id="code" class="why"></setup-context>
  </div>
</template>

<script>
import SetupProps from './SetupProps.vue';
import SetupContext from './SetupContext.vue';
export default {
  components: {
    SetupProps,
    SetupContext
  }
}
</script>

<style scoped>
</style>