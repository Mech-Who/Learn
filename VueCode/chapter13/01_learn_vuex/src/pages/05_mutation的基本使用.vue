<template>
  <div>
    <h4>当前计数：{{ $store.state.counter }}</h4>
    <button @click="addTen">+10</button>
    <button @click="$store.commit('increment')">+1</button>
    <button @click="$store.commit('decrement')">-1</button>
  </div>
</template>

<script>
export default {
  methods: {
    addTen() {
      // 1. 向mutations中incrementN函数的payload参数传递一个对象（也支持传递number类型）
      // this.$store.commit('incrementN', { num: 10, name: "why", age: 18 })
      // 1. commit接收对象的语法，等同于上面的写法
      this.$store.commit({
        // 2. 指定触发一个类型为incrementN的mutation函数
        type: 'incrementN',
        // 3. 将下面的属性都传递给payload参数
        num: 10,
        name: "why",
        age: 18 
      })
    }
  }
}
</script>