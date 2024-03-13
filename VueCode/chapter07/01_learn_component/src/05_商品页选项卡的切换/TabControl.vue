<template>
  <div class="tab-control">
    <div
      v-for="(title, index) in titles"
      class="tab-control-item"
      :class="{ active: currentIndex === index }"
      :key="title"
      @click="itemClick(index)"
    >
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  emit: ["titleClick"],
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      // 默认选中第一个选项
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index; // 更新索引
      this.$emit("titleClick", index); //触发titleClick事件，并传递index给父组件
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.tab-control-item.active {
  color: red;
}
.tab-control-item.active span {
  border-bottom: 3px solid red;
  padding: 5px 10px;
}
</style>
