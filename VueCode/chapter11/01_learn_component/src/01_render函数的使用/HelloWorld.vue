<script>
import { h } from 'vue';

export default {
  render(){
    // <div>
    //   <h4>HelloWorld组件</h4>
    //   <slot name="default">
    //     <span>我是插槽默认值</span>
    //   </slot>
    // </div>
    // 下面的布局等价于上面的布局
    return h("div", null, [
      h("h4", null, "HelloWorld组件"),
      // 1. 定义一个默认的插槽
      this.$slots.default ? this.$slots.default({name: "coderwhy"}) : h("span", null, "我是插槽默认值")
    ])
  }
}
</script>