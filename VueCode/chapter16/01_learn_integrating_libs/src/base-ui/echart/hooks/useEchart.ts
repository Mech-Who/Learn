import * as echarts from 'echarts'

// 1. 这里为echarts注册了地图数据（如需展示地图，则应添加这两行代码，否则可删除）
// import chinaMapData from '../data/china.json'
// echarts.registerMap('china', chinaMapData)

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el) // 初始化echart实例

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options) // 为echart设置图标配置项
  }
  // 2. 对外提供手动修改图标尺寸的函数
  const updateSize = () => {
    echartInstance.resize()
  }

  window.addEventListener('resize', () => {
    echartInstance.resize() // 窗口变化，重新计算图标尺寸
  })

  return { echartInstance, setOptions, updateSize }
}
