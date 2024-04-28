<script>
import { h, ref } from 'vue';
export default {
  setup() {
    const counter = ref(0);

    return () => h("div", { class: "render-counter"}, [
      h("h4", null, `当前计数：${counter.value}`),
      h("button", { onClick: () => counter.value ++ }, "+1"),
      h("button", { onClick: () => counter.value -- }, "-1")
    ])
  }
}
</script>