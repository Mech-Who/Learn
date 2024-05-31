const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  // 方式一：使用Vue CLI提供的属性
  outputDir: './build', // 应用打包输出的目录
  publicPath: '/', // 应用打包时的基本URL

  // 方式二：和webpack属性完全一致，最后与webpack的配置进行合并
  configureWebpack: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, 'src'), // Vue CLI 5.x后默认已配置
      components: '@/components'
    }
  }
})
