<template>
  <div class="mapstate-setup">
    <h4>Setup: {{ $store.state.counter }}</h4>
    <h4>Setup: {{ counter }}</h4>
    <h4>Name: {{ name }}</h4>
    <h4>Age: {{ age }}</h4>
  </div>
</template>

<script>
import { mapState, useStore } from 'vuex';
import { computed } from 'vue';
export default {
  setup() {
    const store = useStore();
    const storeStateFns = mapState(['counter', 'name', 'age'])
    // storeStateFns打印为：{name: function, age: function, ......}
    const storeState = {}
    Object.keys(storeStateFns).forEach(fnKey => {
      const fn = storeStateFns[fnKey].bind({$store: store}) // 1. 绑定this为{$store:store}
      storeState[fnKey] = computed(fn)  // 2. 将普通函数转换为计算属性函数
    })
    // storeState打印为：{ name: ref, age: ref, ......}
    return { ...storeState }
  }
}
</script>

<style scoped></style>