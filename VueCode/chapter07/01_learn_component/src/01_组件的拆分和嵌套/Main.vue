<template>
  <div class="header">
    <!-- 4. 使用局部注册的组件，也支持<MainBanner></MainBanner>这种语法 -->
    <main-banner></main-banner>
    <main-product-list></main-product-list>
  </div>
</template>
<script>
// 1. 导入轮播图组件
import MainBanner from "./MainBanner.vue";
// 2. 导入商品列表组件
import MainProductList from "./MainProductList.vue";
export default {
  components: {
    // 3.注册局部组件
    MainBanner, // 等价于MainBanner: MainBanner写法
    MainProductList,
  },
};
</script>
