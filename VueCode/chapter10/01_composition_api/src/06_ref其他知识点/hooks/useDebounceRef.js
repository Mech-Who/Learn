import { customRef } from 'vue'

// 1. 自定义ref
export default function(value, delay = 300) {
  let timer = null;
  return customRef((track, trigger) => {  // 2. 工厂函数接收track和trigger函数
    return {
      get() {
        track();  // 3. 获取时收集依赖
        return value;
      },
      set(newValue) {
        // 4. 防抖的实现
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue; // 5. 更新值
          trigger();  // 6. 赋值时，触发更新
        }, delay);
      }
    }
  })
}