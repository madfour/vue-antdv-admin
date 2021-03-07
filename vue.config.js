// 所有配置项: https://cli.vuejs.org/zh/config/#vue-config-js
module.exports = {
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。(这个值会在 @vue/cli-plugin-eslint 被安装之后生效)
  lintOnSave: process.env.NODE_ENV !== 'production',

  // 生产环境的 source map，可以设置为 false 以加速生产环境构建。
  productionSourceMap: false,

  devServer: {
    port: 8080, // 设置端口
    open: true, // 设置自动打开
    hot: true
  }
}
