<template>
  <div class="app">App组件</div>
</template>

<script>
// import { sum } from "./utils/math.js"
import("./utils/math").then(res => {
  console.log(res.sum(20, 30));
});
export default {}
</script>