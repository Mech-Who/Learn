<template>
  <div class="my-slot-cpn">
    <div class="header">header</div>
    <slot name="default"> 插槽的默认内容，只在没有提供插入的内容时，才会显示 </slot>
    <!-- 可以简写为 -->
    <!-- <slot></slot> -->
    <div class="footer">footer</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
