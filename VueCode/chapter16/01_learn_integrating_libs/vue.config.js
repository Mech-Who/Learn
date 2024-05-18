const { defineConfig } = require('@vue/cli-service')
// 1. 按需自动导入组件的插件
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // 2. 为webpack添加两个插件
    plugins: [
      require('unplugin-element-plus/webpack')({})
    ]
  }
})
