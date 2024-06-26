<template>
  <div class="page-content">
    <hy-table
      :listData="dataList"
      :listCount="dataCount"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button type="primary" @click="handleNewClick"> 新建用户 </el-button>
      </template>
    </hy-table>
    <h4>Hello World1</h4>
  </div>
</template>

<script lang="ts" setup>
import HyTable from '@/base-ui/table'
import { computed, ref } from 'vue'
interface Props {
  pageName: string
}

const props = withDefaults(defineProps<Props>(), { pageName: '' })
const pageInfo = ref({ currentPage: 1, pageSize: 10 })
const dataList = computed(() => {
  return [{ name: 'coderwhy', enable: 1, pageSize: 10 }]
})
const dataCount = 0
const emit = defineEmits<{
  (e: 'newBtnClick'): void
}>()
const handleNewClick = () => {
  emit('newBtnClick')
}
</script>

<style scoped></style>
