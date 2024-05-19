<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: '100%', height: '360px', border: '1px solid #ddd', margin: '4px'}"></div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
// 1. 导入echarts
import * as echarts from 'echarts'
// 2. 导入echarts对应的类型
import type { ECharts, EChartsOption } from 'echarts'

export default defineComponent({
  name: "EchartDemo",
  setup() {
    // 3. 定义变量，同时指定变量的类型为HTMLElement
    const echartDivRef = ref<HTMLElement>();
    // 组件加载完成
    onMounted(() => {
      // 5. 初始化echart实例，这里用as类型断言明确具体类型;后两个参数分别是主题颜色（内置了light和dark两个模式）和渲染模式（Canvas和SVG模式）
      const echartInstance: ECharts = echarts.init(echartDivRef.value as HTMLElement, "dark", {renderer: 'canvas'})
      // 6. echart柱状图表的配置，指定类型为EChartsOption
      const options: EChartsOption = {
        title: {
          text: "ECharts 入门实例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          type: "category",
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          }
        ]
      }
      // 7. 为echart实例添加图标配置
      echartInstance.setOption(options)
    })
    return { echartDivRef }
  }
})
</script>

<style scoped></style>