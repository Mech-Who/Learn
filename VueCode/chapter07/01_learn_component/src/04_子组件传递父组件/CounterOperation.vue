<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
export default {
  emit: ["add", "sub"], // 1. 定义该组件可以向其父组件出发的add和sub事件
  methods: {
    increment() {
      this.$emit("add"); // 2. 触发自定义add事件，$emit可以接收多个参数，其中第一个参数是事件名称
    },
    decrement() {
      this.$emit("sub"); // 3. 触发自定义sub事件
    },
  },
};
</script>

<style scoped></style>
