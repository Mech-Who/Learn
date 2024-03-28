<template>
  <div @click="divClick">
    About组件: {{ name }} - {{ age }}
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ""
      },
      age: {
        type: Number,
        default: 0
      }
    },
    emit: ["pageClick"],
    methods: {
      divClick() {
        this.$emit("pageClick", "About组件触发的单击")
      }
    }
  }
</script>

<style scoped>
</style>