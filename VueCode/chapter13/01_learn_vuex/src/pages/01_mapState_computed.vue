<template>
  <div class="map-state-computed">
    <h4>Home: {{ $store.state.counter }}</h4>
    <h4>Home: {{ counter }}</h4>
    <h4>Home: {{ name }}</h4>
    <h4>Home: {{ hyAge }}</h4>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      firstName: 'coder'
    }
  },
  computed: mapState({  // 1. mapState函数接收对象类型参数
    counter: (state) => { // 2. 这里的箭头函数不绑定this，会接收一个state参数，并直接返回state中的数据
      return state.counter;
    },
    name(state) {  // 3. 普通函数会绑定this，这里的this是组件的实例
      return this.firstName + state.name
    },
    hyAge: 'age', // 4. key可自定义，这里自定义为hyAge，会直接映射state中的age变量
  })
}
</script>

<style scoped></style>