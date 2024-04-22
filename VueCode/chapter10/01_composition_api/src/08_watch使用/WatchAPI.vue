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
    // 2. 传入reactive函数返回的响应式对象
    watch(info, (newValue, oldValue) => {
      console.log("newValue: ", newValue,"oldValue: ", oldValue);
    })
    const changeData = () => info.name = "kobe";
    return {
      changeData,
      info
    }
  }
}
</script>

<style scoped>
</style>