const path = require('path')
const resolve = dir => path.join(__dirname, dir)

// 所有配置项: https://cli.vuejs.org/zh/config/#vue-config-js
module.exports = {
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。(这个值会在 @vue/cli-plugin-eslint 被安装之后生效)
  lintOnSave: process.env.NODE_ENV !== 'production',

  // 生产环境的 source map，可以设置为 false 以加速生产环境构建。
  productionSourceMap: false,

  devServer: {
    port: 8280, // 设置端口
    open: true, // 设置自动打开
    hot: true,
    hotOnly: false // 热更新
    // overlay: { // 让浏览器 overlay 同时显示警告和错误
    //   warnings: true,
    //   errors: true
    // },
  },

  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('@/assets'))
  },

  configureWebpack: config => {
    // polyfill
    config.entry = ['babel-polyfill', './src/main.js']
  }
}
