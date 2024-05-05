<template>
  <div>
    <h4>当前计数：{{ $store.state.counter }}</h4>
    <button @click="incrementAction">+1</button>
    <button @click="decrement">-1</button>
    <button @click="addTen({num:20})">+10</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // 1. 将this.incrementAction()映射为this.$store.dispatch("incrementAction")
    ...mapActions(['incrementAction'])  // Options API语法
  },
  setup() {
    const actionsFuncs = mapActions({
      decrement: "decrementAction",
      addTen: "incrementNAction"
    })
    return {...actionsFuncs}
  }
}
</script>

<style scoped>
</style>