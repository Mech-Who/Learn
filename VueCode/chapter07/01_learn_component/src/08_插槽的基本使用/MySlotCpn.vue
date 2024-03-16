<template>
    <div class="my-slot-cpn">
        <div class="header">header</div>
        <slot name="default"></slot>
        <!-- 可以简写为 -->
        <!-- <slot></slot> -->
        <div class="footer">footer</div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
</style>