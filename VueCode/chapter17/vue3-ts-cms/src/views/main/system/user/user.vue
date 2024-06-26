<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      pageName="users"
      @newBtnClick="handleNewData"
    ></page-content>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'

const handleNewData = () => {
  console.log('handleNewData')
}

const pageContentRef = ref<InstanceType<typeof PageContent>>()

const handleResetClick = () => {
  pageContentRef.value?.getPageData()
}
const handleQueryClick = (formData: any) => {
  pageContentRef.value?.getPageData(formData)
}
</script>

<style scoped lang="less"></style>
