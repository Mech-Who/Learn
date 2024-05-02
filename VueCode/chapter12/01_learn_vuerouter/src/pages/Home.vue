<template>
  <div class="home">Home Page</div>
  <router-link class="btn" to="/home/message">消息页</router-link>
  <router-link class="btn" to="/home/shops">商品页</router-link>
  <!-- 路由组件的占位 -->
  <router-view></router-view>
</template>

<style>
.btn{
  margin: 4px;
  padding: 3px 5px;
  text-decoration: none;
  border: 1px dashed #ddd;
}
</style>