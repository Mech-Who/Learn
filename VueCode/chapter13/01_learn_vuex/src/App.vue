<template>
  <div>当前计数：{{ $store.state.counter }}</div>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
import { useStore } from 'vuex';  // 2. 导入vuex提供的useStore这个Hook函数

export default {
  name: 'App',
  components: {},
  methods: {
    increment() {
      this.$store.commit('increment') // 1. Options API语法触发调用mutations的方法
    },
  },
  setup() {
    const store = useStore()  // 3. setup不能用this，所以调用useStore函数获取全局store对象
    const decrement = () => {
      store.commit('decrement') // 4. Composition API语法触发mutations的方法
    }
    return { decrement }
  }
}
</script>

<style></style>
