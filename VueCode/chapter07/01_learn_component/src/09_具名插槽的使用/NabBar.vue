<template>
    <div class="nav-bar">
        <div class="left">
            <!-- 动态添加插槽的名称，由外部使用者决定 -->
            <slot :name="name"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: String // 接收插槽的名称
        }
    }
</script>

<style scoped>
</style>