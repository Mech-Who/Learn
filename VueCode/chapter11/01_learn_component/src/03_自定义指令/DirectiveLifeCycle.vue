<template>
  <div class="directive-life-cycle" style="border: 1px solid #ddd; margin: 4px">
    <!-- 2. 使用v-why指令 -->
    <button v-why v-if="counter < 2" @click="increment">当前计数</button>{{ counter }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  directives: {
    why: {  // 1. 自定义v-why局部指令，下面都是该指令的生命周期函数
      created(el, bindings, vnode, prevNode) {
        console.log("dereactive focus created");
      },
      beforeMount() {
        console.log("dereactive focus beforeMount");
      },
      mounted() {
        console.log("dereactive focus mounted");
      },
      beforeUpdate() {
        console.log("dereactive focus beforeUpdate");
      },
      updated() {
        console.log("dereactive focus updated");
      },
      beforeUnmount() {
        console.log("dereactive focus beforeUnmount");
      },
      unmounted() {
        console.log("dereactive focus unmounted");
      }
    }
  },
  setup() {
    const counter = ref(0);
    const increment = () => counter.value++;
    return { counter, increment }
  }
}
</script>

<style scoped></style>