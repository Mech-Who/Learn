<template>
  <div class="login-account">
    <el-form label-width="60px" :model="phone" ref="formRef">
      <el-form-item label="账号">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="phone.verify" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
import { useStore } from 'vuex'

let store = useStore()

// 1. 定义响应式数据，保存用户输入的用户名（账号）和密码
const phone = reactive({
  number: '',
  verify: ''
})
// 2. 获取form组件对象，其中 InstanceType<typeof ElForm> 用于声明form实例类型
const formRef = ref<InstanceType<typeof ElForm>>()
// 3. 提交表单和表单验证
const loginAction = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // console.log('真正执行登录逻辑')
      store.dispatch('login/phoneLoginAction', { ...phone })
    }
  })
}

// 4. 将该组件暴露出去
defineExpose({ loginAction })
</script>
