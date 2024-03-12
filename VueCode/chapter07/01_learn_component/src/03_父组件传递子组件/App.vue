<template>
    <div class="app">
        <!-- 1. 直接传递字符串 -->
        <show-message title="我是标题" content="我是内容"></show-message>
        <!-- 2. 绑定字符串类型的变量 -->
        <show-message :title="title" :content="content"></show-message>
        <!-- 3. 绑定对象中字符串类型的属性 -->
        <show-message :title="message.title" :content="message.content"></show-message>
        <!-- 4. 直接绑定一个对象，会自动将对象的每个属性拆出来逐一绑定 -->
        <show-message v-bind="message"></show-message>
    </div>
</template>

<script>
    import ShowMessage from './ShowMessage.vue'
    export default {
        components: {
            ShowMessage
        }
    },
    data() {
        return {
            title: "我是标题title",
            content: "我是内容content",
            message: {
                title: "我是标题message.title",
                content: "我是内容message.content"
            }
        }
    }
</script>

<style scoped>
</style>