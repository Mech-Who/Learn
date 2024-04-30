<template>
  <div class="directive-param-and-modifier">
    <!-- 2. 向指令传递参数、修饰符和值 -->
    <button v-why:info.aaa.bbb="{name: 'coderwhy', age: 18}">指令的参数和修饰符</button>
  </div>
</template>

<script>
export default {
  directives: {
    why: {
      created(el, bindings, vnode, prevNode) {
        console.log(bindings);  // 1. 打印bindings参数
      }
    }
  }
}
</script>

<style scoped>
</style>