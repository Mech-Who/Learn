<template>
  <div>
    <button @click="updateState">修改状态</button>
  </div>
</template>

<script>
import { reactive, ref, readonly } from 'vue';
export default {
  setup() {
    // 1. 类型一：普通对象
    const info1 = { name: "why" };
    const readonlyInfo1 = readonly(info1);

    // 2. 类型二：响应式对象reactive
    const info2 = reactive({
      name: "why"
    })
    const readonlyInfo2 = readonly(info2);

    // 3. 类型三：响应式对象ref
    const info3 = ref("why");
    const readonlyInfo3 = readonly(info3);

    // 通过单击修改状态
    const updateState = () => {
      readonlyInfo1.name = "coderwhy"  // 只读，修改控制台会出现警告
      // info1.name = "coderwhy"; // 可修改

      readonlyInfo2.name = "coderwhy" // 只读，修改会出现警告
      // info2.name = "coderwhy"; // 可修改

      readonlyInfo3.name = "coderwhy" // 只读，修改会出现警告
      // info3.name = "coderwhy"; // 可修改
    }

    return {
      updateState,
    }
  }
}
</script>

<style scoped></style>