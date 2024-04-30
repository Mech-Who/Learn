<template>
  <div class="custom-local-directive" style="border: 1px solid #ddd; margin: 4px">
    <!-- 4. 使用v-focus指令 -->
    <input type="text" v-focus>
  </div>
</template>

<script>
export default {
  directives: { // 1. 自定义v-focus局部指令
    focus: {
      mounted(el, bindings) { // 2. 自定义指令的生命周期mounted
        console.log("focus mounted");
        el.focus(); // 3. el是input元素对象
      }
    }
  }
}
</script>

<style scoped>
</style>