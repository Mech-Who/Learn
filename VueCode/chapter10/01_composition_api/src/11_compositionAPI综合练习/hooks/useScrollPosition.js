import { ref } from 'vue'

// 1. useScrollPosition函数，即一个自定义的Hook函数
export default function useScrollPosition() {
  const scrollX = ref(0);
  const scrollY = ref(0);

  document.addEventListener("scroll", () => {
    scrollX.value = window.scrollX;
    scrollY.value = window.scrollY;
  })

  return {scrollX, scrollY} // 2. 返回ref响应式数据
}