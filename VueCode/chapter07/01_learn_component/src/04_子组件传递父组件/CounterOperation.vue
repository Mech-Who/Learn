<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <input type="text" v-modeel.number="num" />
    <button @click="increementN">+n</button>
  </div>
</template>

<script>
export default {
    // 1. 数组写法
    // emit: ["add", "sub", "addN"], // 1. 定义该组件可以向其父组件出发的add和sub事件
    emit: {
        add: null,  // 定义该组件可以向其父组件出发的add事件
        sub: null,
        addN: (num, name, age) => {
            if (num > 10) {
                // 如果num大于10，则验证通过
                return true
            }
            // 如果num小于等于10，则返回false。控制台会出现参数验证不通过的警告，但不影响程序的运行
            return false
        }
    },
  data() {
    return {
      num: 0,   // 存储输入的值
    };
  },
  methods: {
    increment() {
      this.$emit("add"); // 2. 触发自定义add事件，$emit可以接收多个参数，其中第一个参数是事件名称
    },
    decrement() {
      this.$emit("sub"); // 3. 触发自定义sub事件
    },
    incrementN() {
      // 触发addN事件，并传递num、name、age三个参数给父组件
      this.$emit("addN", this.num, "why", 18);
    },
  },
};
</script>

<style scoped></style>
