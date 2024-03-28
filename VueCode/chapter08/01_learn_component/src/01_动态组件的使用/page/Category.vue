<template>
  <div @click="divClick">Category组件: {{ name }} - {{ age }}</div>
</template>

<script>
export default {
  name: "category",
  props: {
    name: {
      type: String,
      default: "",
    },
    age: {
      type: Number,
      default: 0,
    },
  },
  emit: ["pageClick"],
  methods: {
    divClick() {
      this.$emit("pageClick", "Category组件触发的单击");
    },
  },
};
</script>

<style scoped></style>
