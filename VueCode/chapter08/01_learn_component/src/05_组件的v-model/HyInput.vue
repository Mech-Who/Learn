<template>
  <div class="hy-input">
    HyInput组件：
    <!-- 1. 支持 -->
    <!-- <input :value="modelValue" @input="inputClick"> -->
    <!-- 2. 不支持 -->
    <!-- <input v-model="modelValue"> -->
    <input v-model="value">
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value); // setter方法
      },
      get() {
        return this.modelValue; // getter方法
      }
    }
  },
  methods: {
    inputClick(event) {
      this.$emit("update:modelValue", event.target.value)
    }
  }
}
</script>

<style scoped></style>