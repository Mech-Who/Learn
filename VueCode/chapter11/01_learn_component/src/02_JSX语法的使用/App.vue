<script lang="jsx">
import HelloWorld from './HelloWorld.vue';
export default {
  data() {
    return {
      counter: 0
    }
  },
  render() {

    // FIXME: 参考博客：https://blog.csdn.net/m0_37685031/article/details/113316750 尚未解决
    // 1. 定义方法，这些方法也可以写到methods选项中
    const increment = () => this.counter++;
    const decrement = () => this.counter--;
    // 2. JSX语法，即允许在JavaScript中编写HTML元素
    // FIXME：出现如下报错：
    // [vue/compiler-sfc] This experimental syntax requires enabling one of the following parser plugin(s): "jsx", "flow", "typescript". (16:6)
    return (
      <div class="app" style="border: 1px solid #ddd; margin: 4px">
        <h4>当前计数：{this.counter}</h4>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        {/** 这里编写的是注释，下面是在JSX语法中使用组件 */}
        <HelloWorld />
      </div>
    )
  }
}
</script>
