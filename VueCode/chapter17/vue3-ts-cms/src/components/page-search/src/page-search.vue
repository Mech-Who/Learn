<template>
  <div class="page-search">
    <hy-form v-model="formData" v-bind="searchFormConfig">
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

interface Props {
  searchFormConfig: any
}

const props = withDefaults(defineProps<Props>(), {
  searchFormConfig: () => ({})
})

const emit = defineEmits<{
  (e: 'resetBtnClick'): void
  (e: 'queryBtnClick', newFormData: any): void
}>()

const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}

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
