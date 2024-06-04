<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
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
      <el-tab-pane name="phone">
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
import { ref, onMounted } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-account.vue'
import localCache from '@/utils/cache'

const accountRef = ref<InstanceType<typeof LoginAccount>>() // 获取 login-account 组件对象
const phoneRef = ref<InstanceType<typeof LoginPhone>>() // 获取 login-phone 组件对象
const currentTab = ref('account')

onMounted(() => {
  // 回显用户名和密码（默认回显：coderwhy 和 123456）
  const name = localCache.getCache('name') || 'coderwhy'
  const password = localCache.getCache('password') || '123456'
  accountRef.value?.setFormFields(name, password)
})

const isKeepPassword = ref(true)
const handleLoginClick = () => {
  // 1. 账号登录方式
  if (currentTab.value === 'account') {
    accountRef.value?.loginAction(isKeepPassword.value) // 是否记住密码，传递给loginAction方法
  } else {
    // 2. 手机登录方法 todo......
    phoneRef.value?.loginAction()
  }
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
