<template>
  <div class="computed-api">
    <!-- 2. 使用fullName计算属性 -->
    <h4>{{ fullName }}</h4>
    <button @click="changeName">修改firstName</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  setup() {
    const firstName = ref("Kobe");
    const lastName = ref("Bryant");
    // 1. 方式一： 传入一个getter函数。computed返回值是一个ref对象
    const fullName = computed(() => firstName.value + " " + lastName.value);
    const changeName = () => {
      // 3. 修改firstName，计算属性会重新计算
      firstName.value = "James"
    }
    return {
      fullName,
      changeName
    }
  }
}
</script>

<style scoped></style>