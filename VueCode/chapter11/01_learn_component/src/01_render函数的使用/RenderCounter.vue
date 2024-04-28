<script>
// 1. 导入h函数
import { h } from 'vue';
export default {
  data() {
    return {
      counter: 0
    }
  },
  render() {
    // 2. 创建布局：div标签中包含一个h4元素和两个button元素
    return h("div", {class: "render-counter"}, [
      // 参数1：标签名称。参数2：标签属性。参数3：标签内容。
      h("h4", null, `当前计数： ${this.counter}`),
      h("button", {onClick: () => this.counter++}, "+1"),
      h("button", {onClick: () => this.counter--}, "-1"),
    ])
  }
}
</script>