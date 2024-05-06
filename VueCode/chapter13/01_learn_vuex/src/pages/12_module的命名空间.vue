<template>
  <div>
    <h4>home子模块homeCounter的状态： {{ $store.state.home.homeCounter }}</h4>
    <h4>home子模块doubleHomeCount： {{ $store.getters['home/doubleHomeCount'] }}</h4>
    <h4>home子模块doubleHomeCount： {{ $store.getters['home/homeCountAddRootCount'] }}</h4>
    <button @click="incrementAction">+1</button>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore()
    const incrementAction = () => {
      store.dispatch('home/incrementAction')  // 1. 只会触发home模块的incrementAction函数
    }
    return { incrementAction }
  }
}
</script>

<style scoped>
</style>