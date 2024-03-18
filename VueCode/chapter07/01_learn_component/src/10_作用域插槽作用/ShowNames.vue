<template>
  <div class="show-names">
    <template v-for="(item, index) in names" :key="item">
      <!-- 为插槽添加itemm和index属性，并绑定item和index数据。item和index称为slot prop -->
      <slot :item="item" :index="index"></slot>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: Array,
      default: () => []
    }
  },
};
</script>

<style scoped></style>
