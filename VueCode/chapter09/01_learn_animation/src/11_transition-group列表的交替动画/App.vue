<template>
  <div>
    <input v-model="keyword">
    <transition-group tag="u1" name="why"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave">
      <!-- 每个li绑定了data-index属性，该值用于计算当前li动画的延时实现动画交替效果 -->
      <li v-for="(item) in showNames" :key="item" :data-index="index">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
  import gsap from "gsap"
  export default {
    data() {
      return {
        names: ["abc", "cba", "nba", "why", "lilei", "hmm", "kobe", "james"],
        keyword: ""
      }
    },
    computed: {
      showNames() {
        return this.names.filter(item => item.indexOf(this.keyword) !== -1)
      }
    },
    methods: {
      beforeEnter(el) {
        // 1. el时将要添加到u1中的li元素。注意：添加n个li元素会回调n次
        el.style.opacity = 0;
        el.style.height = 0;
      },
      enter(el, done) {
        // 2. el时将要添加到u1中的li元素。注意：添加n个li元素会回调n次
        gsap.to(el, {
          opacity: 1,
          height: "1.5em",
          // el.dataset.index是获取li元素上data-index绑定的属性的值
          delay: el.dataset.index * 0.5,
          onComplete: done
        })
      },
      leave(el, done) {
        // 3. el时将要从u1中移除的li元素。注意：移除n个li元素会回调n次
        gsap.to(el, {
          opacity: 0,
          height: 0,
          delay: el.dataset.index * 0.5,
          onComplete: done
        })
      }
    }
  }
</script>

<style scoped>
.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: all 1s ease;
}

</style>