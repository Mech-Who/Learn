import { ref, watch } from 'vue';

// 1. 这次用匿名函数， 该函数需接收一个参数
export default function(title="默认的title"){
  // 1. 计数器案例的逻辑代码
  const { counter, doubleCounter, increment, decrement } = useCounter();

  // 2. 修改网页的标题
  const titleRef = ref("coder");
  // 2. 监听titleRef变化，一旦被修改就更新
  watch(titleRef, (newValue) => {
    document.title = newValue;
  }, {
    immediate: true; // 3. 回调函数先执行一次
  })

  return titleRef;
}