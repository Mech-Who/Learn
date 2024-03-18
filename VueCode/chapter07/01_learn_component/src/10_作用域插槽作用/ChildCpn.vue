<template>
  <div class="child-cpn">
    <h4>{{ title }}</h4>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "我是title",
    };
  },
};
</script>

<style scoped></style>
