<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: '100%', height: '360px', border: '1px solid #ddd', margin: '4px' }"></div>
  </div>
</template>

<script lang="ts" setup>
// 1. 导包
import { ref, onMounted, watchEffect } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart';

interface BaseEChartsProps {
  options: EChartsOption
  width?: string
  height?: string
}

// 2. 定义props
const props = withDefaults(
  defineProps<BaseEChartsProps>(),
  {
    width: '100%',
    height: '360px'
  }
)

// 3. 定义变量
const echartDivRef = ref<HTMLElement>()

// 4. 组件加载完成
onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)
  watchEffect(() => {
    // 6. 为echart设置一个图标配置信息
    setOptions(props.options)
  })
})
</script>