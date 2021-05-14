// const path = require('path')

// module.exports = {
//   // chainWebpack(config) {
//   //   config.module.rule('html').test(/\.md$/).use('html-loader').loader('html-loader').end() config.module.rule('markdown').test(/\.md$/).use('markdown-loader').loader('markdown-loader').end()
//   // }
//   chainWebpack(config) {
//     config.module.rule('html').test(/\.md$/).use('html-loader').loader('html-loader').end()
//     config.module.rule('markdown').test(/\.md$/).use('markdown-loader').loader('markdown-loader').end()

//   },
// }


const path = require("path");
const marked = require("marked");
const renderer = new marked.Renderer();

module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  },
  devServer: {
    publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
    proxy: {
      '/api': {
        target: 'http://10.148.9.24:4000/',
        pathRewrite: {
          '^/api': '/public'
        }
      }
    }
  }
}
