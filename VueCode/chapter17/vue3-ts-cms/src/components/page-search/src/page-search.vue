<template>
  <div class="page-search">
    <hy-form v-model="formData">
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handleResetClick">重置</el-button>
          <el-button type="primary" @click="handleQueryClick">查询</el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import HyForm from '@/base-ui/form'

const emit = defineEmits<{
  (e: 'resetBtnClick'): void
  (e: 'queryBtnClick', newFormData: any): void
}>()

const formOriginData: any = { name: null, enable: null }

const formData = ref(formOriginData)

const handleResetClick = () => {
  formData.value = formOriginData
  emit('resetBtnClick')
}
const handleQueryClick = () => {
  emit('queryBtnClick', formData.value)
}
</script>

<style scoped></style>
