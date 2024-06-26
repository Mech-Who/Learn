<template>
  <div class="page-content">
    <hy-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button type="primary" @click="handleNewClick"> 新建用户 </el-button>
      </template>
      <template #status="scope">
        <el-button plain :type="scope.row.enable ? 'success' : 'danger'">
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button text @click="handleEditClick(scope.row)"> 编辑 </el-button>
          <el-button text @click="handleDeleteClick(scope.row)">
            删除
          </el-button>
        </div>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts" setup>
import HyTable from '@/base-ui/table'
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { formatTime } from '@/utils/date-format'
const store = useStore()

interface Props {
  pageName: string
  contentTableConfig: any
}

const props = withDefaults(defineProps<Props>(), {
  pageName: '',
  contentTableConfig: () => ({})
})

const pageInfo = ref({ currentPage: 1, pageSize: 10 })
watch(pageInfo, () => getPageData())

const getPageData = (queryInfo: any = {}) => {
  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}

getPageData()

const dataList = computed(() =>
  store.getters[`system/pageListData`](props.pageName)
)
const dataCount = computed(() =>
  store.getters[`system/pageListCount`](props.pageName)
)
const emit = defineEmits<{
  (e: 'newBtnClick'): void
}>()
const handleNewClick = () => {
  emit('newBtnClick')
}

const handleEditClick = (row: any) => {
  console.log('handleEditClick', row)
}

const handleDeleteClick = (row: any) => {
  console.log('handleDeleteClick', row)
}

defineExpose({ getPageData })
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
