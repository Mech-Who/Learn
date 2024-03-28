<template>
  <div class="app">
    <button
      v-for="item in tabs" :key="item"
      @click="itemClick(item)"
      :class="{ active: currentTab == item }"
    >
      {{ item }}
    </button>
    <!-- 1. v-if指令的实现 -->
    <!-- 2. 向三个组件传递name和age属性，以及监听pageClick事件 -->
    <component 
      :is="currentTab"
      name="coderwhy"
      :age="18"
      @pageClick="pageClick">
    </component>
  </div>
</template>

<script>
import Home from "./page/Home.vue";
import About from "./page/About.vue";
import Category from "./page/Category.vue";
export default {
  components: {
    Home,
    About,
    Category,
  },
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentTab: "home",
    };
  },
  methods: {
    itemClick(item) {
      this.currentTab = item;
    },
  },
};
</script>

<style scoped></style>
