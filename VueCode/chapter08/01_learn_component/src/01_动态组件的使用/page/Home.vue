<template>
    <div @click="divClick">
      Home组件: {{ name }} - {{ age }}
    </div>
</template>

<script>
    export default {
      name: "home",
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
          this.$emit("pageClick", "Home组件触发的单击")
        }
      }
    }
</script>

<style scoped>
</style>