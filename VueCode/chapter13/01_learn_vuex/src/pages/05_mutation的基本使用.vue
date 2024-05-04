<template>
  <div>
    <h4>当前计数：{{ $store.state.counter }}</h4>
    <button @click="$store.commit('increment')">+1</button>
    <button @click="$store.commit('decrement')">-1</button>
  </div>
</template>