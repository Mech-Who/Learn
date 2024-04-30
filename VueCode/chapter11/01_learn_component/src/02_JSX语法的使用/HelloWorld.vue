<script>
export default {
  render() {
    return (
      <div class="app" style="border: 1px solid #ddd; margin: 4px">
        <div>HelloWorld组件</div>
        {/**这里编写的是注释，下面定义了default插槽*/}
        {this.$slots.default ? this.$slots.default(): <span>插槽默认内容</span>}
      </div>
    )
  }
}
</script>
