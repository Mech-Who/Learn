<template>
  <div class="app">
    <button
      v-for="item in tabs"
      :key="item"
      @click="itemClick(item)"
      :class="{ active: currentTab == item }"
    >
      {{ item }}
    </button>
    <!-- 2. 用keep-alive组件保留动态组件的状态，同时会保留其对应的子孙组件的状态 -->
    <keep-alive :include="/home|category/">
      <component
        :is="currentTab"
        name="coderwhy"
        :age="18"
        @pageClick="pageClick"
      >
      </component>
    </keep-alive>
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
