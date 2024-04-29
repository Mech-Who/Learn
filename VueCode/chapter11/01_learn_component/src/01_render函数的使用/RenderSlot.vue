<script>
import { h } from "vue";
import HelloWorld from "./HelloWorld.vue";
export default {
  // <div>
  //   <HelloWorld>
  //     <template v-slot:default="slotProps">
  //       <span>传入HelloWorld插槽中的内容。插槽props的name：{{ slotProps.name }}</span>
  //     </template>
  //   </HelloWorld>
  // </div>
  // 下面的布局等价于上面的布局
  render() {
    // 1. 渲染HelloWorld组件
    return h("div", { class: "render-slot" }, [
      'RenderSlot组件',
      h(HelloWorld, null, {
        // 2. 使用 HelloWorld组件的默认插槽
        default: props => h("span", null, `传入HelloWorld插槽中的内容。插槽props的name：${props.name}`)
      })
    ])
  }
}
</script>

<style scoped>
.render-slot {
  border: 1px solid #ddd;
  margin: 9px;
}
</style>