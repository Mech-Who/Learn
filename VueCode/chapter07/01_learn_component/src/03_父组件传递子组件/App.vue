<template>
  <div class="app">
    <!-- 5. 直接传递字符串 -->
    <show-message messageInfo="我是messageInfo字符串"></show-message>
    <show-message message-info="我是message-info字符串"></show-message>
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

<style scoped></style>
