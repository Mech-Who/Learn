const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  // 方式一：使用Vue CLI提供的属性
  outputDir: './build', // 应用打包输出的目录
  publicPath: '/', // 应用打包时的基本URL

  devServer: {
    proxy: {
      '^/api': {
        target: 'http://codercba.com:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },

  // 方式二：和webpack属性完全一致，最后与webpack的配置进行合并
  configureWebpack: {
    resolve: {
      // 配置别名
      alias: {
        '@': path.resolve(__dirname, 'src'), // Vue CLI 5.x后默认已配置
        components: '@/components'
      }
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
})
