<template>
  <div class="nav">
    <router-link class="tab" to="/home">首页</router-link>
    <router-link class="tab" to="/about">关于</router-link>
  </div>
  <router-view v-slot="props">
    <keep-alive>
      <component :is="props.Component"></component>
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue { }
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
