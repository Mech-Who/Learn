<template>
  <div class="app">
    <h4>App组件formData.name: {{ formData.name }}</h4>
    <h4>App组件formData.title: {{ formData.title }}</h4>
    <hy-form v-model="formData"></hy-form>
  </div>
</template>

<script>
import HyForm from "./HyForm.vue"
export default {
  components: {
    HyForm
  },
  data() {
    return {
      formData: {
        name: "coder",
        title: "why",
      }
    }
  },
}
</script>

<style scoped></style>