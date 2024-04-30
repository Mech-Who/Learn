<template>
  <div class="app" style="border: 1px solid #ddd; margin: 4px">
    App组件
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';
export default {
  setup() {
    const instance = getCurrentInstance();  // 获取组件实例，相当于this
    // 2. 通过组件实例访问全局属性 $name
    console.log("setup name=", instance.appContext.config.globalProperties.$name);
  },
  mounted() {
    // 2. 通过this访问全局属性 $name
    console.log("mounted name=", this.$name);
  }
}
</script>

<style scoped></style>