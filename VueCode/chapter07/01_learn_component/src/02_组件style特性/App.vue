<template>
  <h4>App Title</h4>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
export default {
    components: {
        HelloWorld
    }
};
</script>

<style scoped>
h4 {
    text-decoration: underline;
}
:deep(.msg) {
    text-decoration: underline;
}
</style>
