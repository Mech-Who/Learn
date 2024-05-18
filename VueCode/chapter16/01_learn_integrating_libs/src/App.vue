<template>
  <!-- Vue Router -->
  <div class="nav">
    <router-link class="tab" to="/home">首页</router-link>
    <router-link class="tab" to="/about">关于</router-link>
  </div>
  <router-view v-slot="props">
    <keep-alive>
      <component :is="props.Component"></component>
    </keep-alive>
  </router-view>
  <!-- Vuex -->
  <div>
    <h1>当前计数：{{ $store.state.counter }}</h1>
  </div>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <!-- ELement Plus -->
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex'
// 1. 导入自定义的IRootState类型
import type { IRootState } from './store/index'

// import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'App',
  components: {
    // ElButton  // 局部注册ElButton组件
  },
  setup() {
    const store = useStore<IRootState>()
    const increment = () => { store.commit('increment') }
    const decrement = () => { store.commit('decrement') }
    return { decrement, increment }
  }
})
</script>

<style>
.nav {
  margin: 20px 0px;
}

.tab {
  border: 1px solid #ddd;
  margin-right: 8px;
  padding: 2px 20px;
  text-decoration: none;
}
</style>
