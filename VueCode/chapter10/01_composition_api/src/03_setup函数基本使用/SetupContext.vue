<template>
  <div class="setup-context" style="border: 1px solid #ddd;margin:10px">
    App组件
    <h4>{{ message }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup(props, context) {         // context对象参数支持解构
    console.log(props.message);   // 1. 所有props属性
    console.log(context.attrs.id, context.attrs.class); // 2. 所有非props属性
    console.log(context.slots);   // 3. 父组件传递过来的插槽
    console.log(context.emit);    // 4. 用于触发事件，如context.emit("name", value)
  }
}
</script>

<style scoped>
</style>