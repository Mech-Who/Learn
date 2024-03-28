<template>
  <div>
    About组件
    <button @click="counter++">单击递增：{{ counter }}</button>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    divClick() {
      this.$emit("pageClick", "About组件触发的单击");
    },
  },
};
</script>

<style scoped></style>
