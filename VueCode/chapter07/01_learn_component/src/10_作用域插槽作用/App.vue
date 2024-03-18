<template>
  <div class="app">
    <child-cpn>
      <button>{{title}}</button>
    </child-cpn>
  </div>
</template>

<script>
  import ChildCpn from './ChildCpn.vue';
  export default {
    components: {
      ChildCpn
    }
  }
</script>

<style scoped>
</style>