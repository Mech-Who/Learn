<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="foo">单击调用demoMixin定义的foo方法</button>
  </div>
</template>

<script>
import { demoMixin } from './mixins/demoMixin'
export default {
  // 将demoMixin定义的data、methods和created选项混入该组件中，也支持混入其他组件中
  mixins: [demoMixin]
}
</script>

<style scoped></style>