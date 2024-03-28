<template>
  <div>
    Home组件
    <button @click="counter++">单击递增：{{ counter }}</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      counter: 0
    }
  },
};
</script>

<style scoped></style>
