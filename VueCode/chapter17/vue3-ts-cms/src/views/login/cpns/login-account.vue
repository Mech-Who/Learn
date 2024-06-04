<template>
  <div class="login-account">
    <el-form label-width="60px" :model="account" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import localCache from '@/utils/cache'
import { rules } from '../config/account-config'
import { reactive, ref } from 'vue'
import { type ElForm } from 'element-plus'
// 获取 useStore Hook函数
import { useStore } from 'vuex'

let store = useStore()
// 定义响应式数据，保存用户输入的用户名（账号）和密码
const account = reactive({
  name: '',
  password: ''
})
// 获取form组件对象，其中 InstanceType<typeof ElForm> 用于声明form实例类型
const formRef = ref<InstanceType<typeof ElForm>>()
// 提交表单和表单验证
const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 判断是否需要记住密码
      if (isKeepPassword) {
        // 本地缓存用户名和密码
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
      } else {
        localCache.deleteCache('name')
        localCache.deleteCache('password')
      }

      // 发起网络请求，开始进行登录验证
      store.dispatch('login/accountLoginAction', { ...account })
    }
  })
}

// 为表单项设置值
const setFormFields = (name: string, password: string) => {
  account.name = name || account.name
  account.password = password || account.password
}

// 将该组件暴露出去
defineExpose({ loginAction, setFormFields })
</script>
