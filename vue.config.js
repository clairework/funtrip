const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vue-meta'] // true
})

// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/claire-api/'
    : '/',
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        const [meta] = args
        meta.title = '放假趣'
        meta.icon = 'favicon.ico'
        meta.meta = {
          keywords: '放假趣旅遊網',
          description: '',
          og: {
            type: 'website',
            url: '#',
            title: '放假趣',
            image: '#',
            description: ''
          }
        }
        return args
      })
  }
}
