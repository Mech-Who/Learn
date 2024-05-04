<template>
  <div class="useState-use">
    <h4>useState: {{ $store.state.counter }}</h4>
    <h4>useState: {{ counter }}</h4>
    <h4>Name: {{ name }}</h4>
    <h4>Age: {{ age }}</h4>
  </div>
</template>

<script>
import { useState } from '../hooks' // 1. 导入自定义Hook
export default {
  setup(){
    const storeState = useState(["counter"]); // 2. 使用自定义Hook
    const storeState2 = useState({  // 3. 使用自定义Hook
      name: state => state.name,
      age: state => state.age
    })
    return { ...storeState, ...storeState2 }
  }
}
</script>

<style scoped>
</style>