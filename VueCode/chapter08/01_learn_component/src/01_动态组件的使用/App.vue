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
    <!-- 2. 动态组件的实现（is属性是动态绑定组件的名称。例如is="home"，代表绑定<home/>组件） -->
    <component :is="currentTab"></component>
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
