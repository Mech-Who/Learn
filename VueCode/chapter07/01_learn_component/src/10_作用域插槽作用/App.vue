<template>
  <div class="app">
    <show-names :names="names">
      <!-- v-slot:default后面的值slotProps是插槽属性的集合。其中,slotProps可任意命名 -->
      <template v-slot:default="slotProps">
        <span>{{slotProps.item}}-{{slotProps.index}}</span>
      </template>
    </show-names>
  </div>
</template>

<script>
import ShowNames from "./ShowNames.vue"
export default {
  components: {
    ShowNames
  },
  data() {
    return {
      names: ["coder", "why", "colin"],
    };
  },
};
</script>

<style scoped></style>
