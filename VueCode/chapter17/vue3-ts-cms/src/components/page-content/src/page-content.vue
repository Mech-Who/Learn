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
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'

interface Props {
  pageName: string
}

const props = withDefaults(defineProps<Props>(), { pageName: '' })

const store = useStore()

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

defineExpose({ getPageData })
</script>

<style scoped></style>
