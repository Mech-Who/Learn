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
        // 1. 标题相关的属性
        title: {
          text: "ECharts 入门实例",   // 标题的内容
          textStyle: {}             // 标题的样式
        },
        // 2. 提示框组件
        tooltip: {
          // 'item': 数据项图形触发显示提示框，主要在散点图，饼图等无类目轴的图表中使用
          // 'axis': 坐标轴触发显示提示框，主要在柱状图、折线图等会使用类目轴的图表中使用
          trigger: 'item',
        },
        // 3. 图例组件
        legend: {
          // 图例中的数据通常是一个数组字符串（比如将series属性中的name值填入）
          // 如果不设置，那么会默认提取
          data: ["销量"],
        },
        // 4. 在直角坐标系内绘制网格的位置
        grid: {
          // 是否显示直角坐标系的网格
          show: true,
          // 设置下面的值时，是否包含babel
          containLabel: false,
          // 上下左右的距离
          top: '3%',
          bottom: '3%',
          left: '3%',
          right: '4%',
        },
        // 5. x轴相关的属性（支持对象和数组类型）
        xAxis: {
          // 'value': 数值轴，适用于连续数据
          // 'category': 类目轴，适用于离散的类目数据
          type: "category",                                               // 坐标轴类型，这里为类目轴
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],   // x轴上的数据
        },
        // 5. y轴相关的属性
        yAxis: {},
        // 6. 图表具体的数据
        series: [
          {
            name: "销量",                   // 数据对应的名称
            type: "bar",                    // 以柱状图的形式展示（支持bar、line、pie、map等）
            label: {},                      // 图形上的文本标签，可用于说明图形的一些数据信息
            emphasis: {},                   // 配置高亮的图形样式和标签样式
            data: [5, 20, 36, 10, 10, 20],  // 图表的各个数据项（支持number、string、object等类型）
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