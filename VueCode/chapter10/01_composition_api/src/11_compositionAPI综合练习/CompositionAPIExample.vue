<template>
  <div class="composition-api-example">
    <!-- 1. 计数器案例 -->
    <div>当前计数: {{ counter }}</div>
    <div>当前计数*2: {{ doubleCounter }}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <!-- 3. 显示页面滚动位置 -->
    <p style="width: 3000px;height: 5000px">
      width:3000px height:5000px的，模拟页面滚动
    </p>
    <div style="position: fixed; top: 20px; right: 20px">
      <div>scrollX: {{ scrollX }}</div>
      <div>scrollY: {{ scrollY }}</div>
    </div>
  </div>
</template>

<script>
import useCounter from 'hooks/useCounter.js';
import useTitle from 'hooks/useTitle.js';
import useScrollPosition from 'hooks/useScrollPosition.js';
export default {
  setup() {
    // 1. 计数器案例的逻辑代码
    const { counter, doubleCounter, increment, decrement } = useCounter();

    // 2. 修改网页的标题
    const titleRef = useTitle("coder");
    setTimeout(() => {
      // 3. 过3s后修改titleRef的值，被useTitle函数的watch监听到，就会修改标题
      titleRef.value = "why"
    }, 3000)

    // 3. 监听页面滚动位置(可直接解构，因为Hook函数返回的对象属性是ref对象)
    const { scrollX, scrollY } = useScrollPosition();

    return {
      counter,
      doubleCounter,
      increment,
      decrement,
      scrollX,
      scrollY
    }
  }
}
</script>

<style scoped></style>