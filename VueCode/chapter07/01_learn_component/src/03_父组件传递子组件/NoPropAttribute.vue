<template>
    <div class="no-prop-attribute">该子组件没有定义任何的props属性(节点1)</div>
    <div class="no-prop-attribute">该子组件没有定义任何的props属性(节点2)</div>
    <div class="no-prop-attribute" :class="$attrs.class">该子组件没有定义任何的props属性(节点2)</div>
</template>

<script>
    export default {}
</script>

<style scoped>
</style>