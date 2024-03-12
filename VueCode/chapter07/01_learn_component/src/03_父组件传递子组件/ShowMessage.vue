<template>
  <div class="show-message">
    <div v-if="messageInfo">{{ messageInfo }}</div>
  </div>
</template>

<script>
export default {
    // 1. props是数组
    // props: ['title', 'content']

    // 2. props是对象
    props: {
        // 1. camelCase命名法（推荐这种写法）
        messageInfo: {
            type: String
        }
        // 2. kebab-case命名法（需要添加单引号，不推荐）
        // 'message-info': {
        //     type: String
        // }
    }
}
</script>

<style scoped></style>
