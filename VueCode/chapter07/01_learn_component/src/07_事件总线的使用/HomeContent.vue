<template>
    <div class="home-content">
        HomeContent
    </div>
</template>

<script>
    import emitter from "@/utils/eventbar"
    export default {
        created() {
            // 1. 监听全局的why事件。参数1：事件名称。参数2：监听事件的回调函数
            emitter.on("why", (info) => {
                console.log("why:", info);
            });
            // 2. 监听全局的kobe事件
            emitter.on("kobe", (info) => {
                console.log("kobe:", info);
            });
            // 3. 监听all事件
            emitter.on("*", (type, info) => {
                console.log("* listener:", type, info);
            });
        }
    }
</script>

<style scoped>
</style>