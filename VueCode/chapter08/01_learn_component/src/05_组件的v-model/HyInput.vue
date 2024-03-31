<template>
  <div class="hy-input">
    HyInput组件：
    <input :value="modelValue" @input="inputClick">
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String
  },
  emits: ["update:modelValue"],
  methods: {
    inputClick(event) {
      this.$emit("update:modelValue", event.target.value)
    }
  }
}
</script>

<style scoped></style>