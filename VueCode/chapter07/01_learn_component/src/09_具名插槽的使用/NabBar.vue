<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot> <!-- 1. 为插槽起一个left名字 -->
        </div>
        <div class="center">
            <slot name="center"></slot> <!-- 2. 为插槽起一个center名字 -->
        </div>
        <div class="right">
            <slot name="right"></slot> <!-- 2. 为插槽起一个right名字 -->
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
</style>