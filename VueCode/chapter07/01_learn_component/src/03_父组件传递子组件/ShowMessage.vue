<template>
    <div class="show-message">
        <h4>{{ title }}</h4>
        <div>{{ content }}</div>
    </div>
</template>

<script>
    export default {
        // 1. props是数组
        // props: ['title', 'content']

        // 2. props是对象
        props: {
            title: String,  // 定义title属性为String类型（这里是简写，下面content属性是完整的写法）
            content: {
                type: String,   // 定义参数类型为String类型
                required: true, // 父组件使用该组件时必须传递该参数， 否则控制台会出现警告
                default: "我是内容的默认值" // 如果父组件使用该组件时没有传递content参数，则使用默认值
            },
            multi: {
                // 多个可能的类型
                type: [String, Number]
            },
            obj: {
                // 对象或数组default的默认值必须从一个工厂函数获取，保证每个组件实例的默认值来自不同的引用。
                type: object,
                default() {
                    return { message: 'hello' }
                }
            },
            include: {
                // 自定义验证函数
                validator(value) {
                    return ['success', 'warning', 'danger'].includes(value)
                }
            },
            defaultFunction: {
                type: Function,
                // 与对象或数组默认值不同，这不是一个工厂函数，而是一个用作默认值的函数
                default() {
                    return 'Default function'
                }
            }
        }
    }
</script>

<style scoped>
</style>