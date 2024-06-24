<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'

const handleResetClick = () => {
  console.log('handleResetClick')
}
const handleQueryClick = (formData: any) => {
  console.log('handleQueryClick', formData)
}
</script>

<style scoped lang="less"></style>
