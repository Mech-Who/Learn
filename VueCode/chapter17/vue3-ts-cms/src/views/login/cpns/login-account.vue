<template>
  <div class="login-account">
    <el-form label-width="60px" :model="account" ref="formRef">
      <el-form-item label="账号">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
// 1. 定义响应式数据，保存用户输入的用户名（账号）和密码
const account = reactive({
  name: '',
  password: ''
})
// 2. 获取form组件对象，其中 InstanceType<typeof ElForm> 用于声明form实例类型
const formRef = ref<InstanceType<typeof ElForm>>()
// 3. 提交表单和表单验证
const loginAction = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log('真正执行登录逻辑')
    }
  })
}
// 4. 将该组件暴露出去
defineExpose({ loginAction })
</script>