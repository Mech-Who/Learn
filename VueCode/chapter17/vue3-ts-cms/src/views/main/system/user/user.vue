<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content pageName="users" @newBtnClick="handleNewData"></page-content>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'

const handleResetClick = () => {
  console.log('handleResetClick')
}
const handleQueryClick = (formData: any) => {
  console.log('handleQueryClick', formData)
}
const handleNewData = () => {
  console.log('handleNewData')
}
</script>

<style scoped lang="less"></style>
