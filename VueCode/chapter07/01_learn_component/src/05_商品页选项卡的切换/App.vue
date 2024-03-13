<template>
  <div>
    <tab-control :titles="titles" @titleClick="titleClick"></tab-control>
    <h2>{{ contents[currentIndex] }}</h2>
  </div>
</template>

<script>
import TabControl from "./TabControl.vue";
export default {
  components: {
    TabControl,
  },
  data() {
    return {
      titles: ["衣服", "鞋子", "裤子"], // 定义选项卡每项的title
      contents: ["衣服页面", "鞋子页面", "裤子页面"], // 定义选项卡每页显示的内容
      currentIndex: 0, // 默认选中的索引
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped></style>
