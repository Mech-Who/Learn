<template>
  <div>
    <button @click="addNum">添加数字</button>
    <button @click="removeNum">删除数字</button>
    <!-- tag="p" 指定p元素作为容器元素来渲染 -->
    <transition-group tag="p" name="why">
      <span v-for="item in numbers" :key="item" class="item">
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numCounter: 10
    }
  },
  methods: {
    addNum() {
      // 1. 在随机位置添加一个数字
      this.numbers.splice(this.randomIndex(), 0, this.numCounter++)
    },
    removeNum() {
      // 2. 删除随机位置的数字
      this.numbers.splice(this.randomIndex(), 1)
    },
    randomIndex() {
      // 3. 获取numbers数组的随机索引
      return Math.floor(Math.random() * this.numbers.length)
    }
  }
}
</script>

<style scoped>
.item {
  margin-right: 10px;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
  transform: traanslateY(30px);
}

.why-enter-active,
.why-leave-active {
  transition: all 1s ease;
}
</style>