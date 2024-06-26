<template>
  <div class="hy-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="用户名"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        prop="enable"
        label="状态"
        align="center"
        show-overflow-tooltip
      >
        <template #default="scope">
          <el-button>{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        ></el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title?: string
  listData: Array<any>
  listCounte?: number
  page?: { currentPage: number; pageSize: number }
  childrenProps?: any
  showIndexColumn?: boolean
  showSelectColumn?: boolean
  showFooter?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  listData: () => [],
  listCount: 0,
  page: () => ({ currentPage: 0, pageSize: 10 }),
  childrenProps: () => ({}),
  showIndexColumn: true,
  showSelectColumn: true,
  showFooter: true
})

const emit = defineEmits<{
  (e: 'selectionChange', value: any): void
  (e: 'update:page', value: any): void
}>()

const handleSelectionChange = (value: any) => {
  emit('selectionChange', value)
}
const handleCurrentChange = (currentPage: number) => {
  emit('update:page', { ...props.page, currentPage })
}
const handleSizeChange = (pageSize: number) => {
  emit('update:page', { ...props.page, pageSize })
}

defineExpose({
  handleSelectionChange,
  handleCurrentChange,
  handleSizeChange
})
</script>
