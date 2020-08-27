module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Vue3 Project with TypeScript'
    }
  },
  devServer: {
    port: 8080,
    proxy: {
      '/api': 'http://yourhost.com'
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/styles/global.scss";'
      }
    }
  }
}
