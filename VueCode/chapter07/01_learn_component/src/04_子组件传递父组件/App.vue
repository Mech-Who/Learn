<template>
    <div class="app">
        <h4>当前计数： {{ counter }}</h4>
        <counter-operation @add="addOne" @sub="subOne"/>
    </div>
</template>

<script>
    import CounterOperation from './CounterOperation.vue'
    export default {
        components: {
            CounterOperation
        },
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            addOne() {
                this.counter++
            },
            subOne() {
                this.counter--
            }
        }
    }
</script>

<style scoped>
</style>