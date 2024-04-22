<template>
  <div class="watch-api">
    <h4>
      {{ info.name }}
    </h4>
    <button @click-="changeData">修改数据</button>
  </div>
</template>

<script>
import { reactive, watch } from 'vue';
export default {
  setup() {
    const info = reactive({name: "coderwhy", age: 18});
    // 1. 传入一个getter函数, 该函数引用响应式对象info
    watch(() => info.name, (newValue, oldValue) => {
      // 2. 监听info对象中name的变化
      console.log("newValue:", newValue, "oldValue:", oldValue);
    })
    const changeData = () => {
      info.name = "kobe"; // 3. 改变info对象中的name

    }
    return {
      changeData,
      info
    }
  }
}
</script>

<style scoped>
</style>