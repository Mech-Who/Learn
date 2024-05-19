<template>
  <!-- Vue Router -->
  <div class="nav">
    <router-link class="tab" to="/home">首页</router-link>
    <router-link class="tab" to="/about">关于</router-link>
  </div>
  <router-view v-slot="props">
    <keep-alive>
      <component :is="props.Component"></component>
    </keep-alive>
  </router-view>
  <!-- Vuex -->
  <div>
    <h1>当前计数：{{ store.state.counter }}</h1>
  </div>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <!-- ELement Plus -->
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <!-- ECharts -->
  <!-- <echart-demo></echart-demo> -->
  <base-echart :options="options"></base-echart>
  <base-echart :options="pieOptions"></base-echart>
  <base-echart :options="lineOptions"></base-echart>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex'
// 1. 导入自定义的IRootState类型
import type { IRootState } from './store/index'
import type { EChartsOption } from 'echarts';

// import { ElButton } from 'element-plus'
// import EchartDemo from './base-ui/echart-demo.vue'
import BaseEchart from './base-ui/echart/index';
export default defineComponent({
  name: 'App',
  components: {
    // ElButton  // 局部注册ElButton组件
    // EchartDemo
    BaseEchart
  },
  setup() {
    const store = useStore<IRootState>()
    const increment = () => { store.commit('increment') }
    const decrement = () => { store.commit('decrement') }

    // EChart图标的配置选项
    const options = computed<EChartsOption>(() => {
      return {
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
    })

    // Echarts的pie配置选项
    const pieOptions = computed<EChartsOption>(() => {
      return {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie', // 选择图表类型为：饼图
            radius: ['40%', '70%'], // 内半径，外半径
            label: {
              show: false, // 默认label隐藏
              position: 'center'
            },
            emphasis: {
              label: { // 高亮时label显示
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: { show: false },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      }
    })

    // Echarts的line配置选项
    const lineOptions = computed<EChartsOption>(() => {
      return {
        title: {
          text: '折线图-案例'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件', '广告']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%'
        },
        xAxis: {
          type: 'category',
          data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '广告',
            type: 'line',
            data: ['220', '182', '191', '234', '290', '330', '310']
          }
        ]
      };
    })

    return { store, decrement, increment, options, pieOptions, lineOptions }
  }
})
</script>

<style>
.nav {
  margin: 20px 0px;
}

.tab {
  border: 1px solid #ddd;
  margin-right: 8px;
  padding: 2px 20px;
  text-decoration: none;
}
</style>
