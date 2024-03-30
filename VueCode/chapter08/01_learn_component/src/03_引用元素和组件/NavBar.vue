<template>
  <div class="navbar">
    <h4>NavBar</h4>
    <button @click="getParentAndRoot">获取父组件和根组件实例对象</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello NavBar!"
    }
  },
  methods: {
    sayHello() {
      console.log("sayHello: Hello NavBar");
    },
    getParentAndRoot() {
      console.log("$parent=", this.$parent); // 获取父组件实例对象
      console.log("访问父组件（App）中的names变量=", this.$parent.names);
      console.log("$root=", this.$root);
    }
  }
}
</script>

<style scoped></style>