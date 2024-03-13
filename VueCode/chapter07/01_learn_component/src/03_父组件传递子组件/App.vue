<template>
    <div class="app">
        <!-- 6. 传递非props的属性：id，class和name -->
        <no-prop-attribute id="coder" class="why" name="coderwhy"></no-prop-attribute>
    </div>
</template>

<script>
    import NoPropAttribute from './NoPropAttribute.vue'
    export default {
        components: {
            NoPropAttribute
        }
    }
</script>

<style scoped>
</style>