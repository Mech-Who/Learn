<template>
  <div class="ref-api" style="border: 1px solid #ddd;margin: 4px">
    RefAPI组件
    <!-- 当在模板中使用ref对象时，它会自动进行解包，不需要通过value属性访问 -->
    <h4>当前计数: {{ counter }}</h4>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const counter = ref(100)  // counter是一个ref响应式对象
    const increment = () => {
      counter.value++ // 3. 局部函数修改响应式数据，不会自动解包
      console.log(counter.value); // 获取响应式数据
    }
    return {
      counter,  // 4. 返回响应式数据
      increment // 5. 返回定义的方法，等同于在methods中定义方法
    }
  }
}
</script>

<style scoped></style>