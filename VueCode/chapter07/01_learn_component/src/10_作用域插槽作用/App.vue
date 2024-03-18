<template>
  <div class="app">
    <show-names :names="names" v-slot="slotProps">
      <!-- 独占默认插槽，v-slot:default=""可以写成v-slot="",可以省去template标签-->
      <!-- 如果组件同时具备默认插槽和具名插槽，那么必须按照template的语法来编写 -->
      <span>{{slotProps.item}}-{{slotProps.index}}</span>
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
