<template>
  <div class="app">
    <nav-bar :name="name">
      <template v-slot:[name]>
        <!-- 传递插槽名称给NavBar.vue组件 -->
        <button>左边按钮</button>
      </template>
      <template v-slot:center>
        <h4>我是标题</h4>
      </template>
      <!-- v-slot的简写为# -->
      <!-- v-slot:right 等价于 #right -->
      <template v-slot:right>
        <i>右边的i元素</i>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      name: "coderwhy", // 定义插槽的名称
    };
  },
};
</script>

<style scoped></style>
