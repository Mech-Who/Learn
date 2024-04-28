<script>
import { h } from 'vue';

export default {
  // 2. 在render函数中使用h函数
  render() {
    // 下面等价于创建：<h4 class="title">RenderExample组件</h4> 元素
    return h("h4", {class: "title"}, "RenderExample组件")
  },
  // 等价写法：
  // 1. 在setup函数中使用h函数，return需要返回一个函数
  setup() {
    return () => h("h4", {class: "title"}, "RenderExample组件")
  }
}
</script>

<style scoped>
.title{
  text-decoration: underline;
}
</style>