<template>
  <div class="hy-multiple-input">
    HyMultipleInput组件：
    <input :value="modelValue" @input="input1Change">
    <input :value="title" @input="input2Change">
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String, // 1. 默认v-model绑定的属性
    title: String,      // 2. 默认v-model绑定的属性
  },
  emits: ["update:modelValue", "update:title"],
  methods: {
    input1Change(event) {
      this.$emit("update:modelValue", event.target.value) // 3. 默认触发的事件
    },
    input2Change(event) {
      this.$emit("update:title", event.target.value)      // 4. 指定触发的事件
    },
  }
}
</script>

<style scoped></style>