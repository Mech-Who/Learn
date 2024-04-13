<template>
  <div>
    <input v-model="keyword">
    <transition-group tag="u1" name="why">
      <li v-for="(item) in showNames" :key="item">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
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