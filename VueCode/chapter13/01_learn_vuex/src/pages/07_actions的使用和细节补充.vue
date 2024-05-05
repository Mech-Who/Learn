<template>
  <div class="actions-use">
    <h4>当前计数：{{ $store.state.counter }}</h4>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  methods: {
    increment() { // Options API 语法
      this.$store.dispatch("incrementAction") // 分发action
    }
  },
  setup() {
    // 2. setup语法
    const store = useStore()
    const decrement = () => {
      store.dispatch("decrementAction") // 分发action
    }
    const addTen = () => {
      // 1. 分发action，并传递对象参数
      // store.dispatch("incrementNAction", {num:10})
      store.dispatch({
        type: "incrementNAction",
        num: 10
      })
    }
    return { decrement }
  }
}
</script>

<style scoped></style>