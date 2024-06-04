<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon>
              <UserFilled />
            </el-icon>
            账号登录
          </span>
        </template>
        <login-account></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon>
              <Iphone />
            </el-icon>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-account.vue'
const accountRef = ref<InstanceType<typeof LoginAccount>>() // 获取login-account组件对象
const isKeepPassword = ref(true)
const handleLoginClick = () => {
  // 单击“立即登录”按钮，调用login-account组件暴露的loginAction方法
  accountRef.value?.loginAction()
}
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
