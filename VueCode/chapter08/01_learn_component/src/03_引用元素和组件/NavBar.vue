<template>
  <div class="navbar">
    NavBar 组件
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
    }
  }
}
</script>

<style scoped></style>