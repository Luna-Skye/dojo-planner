module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/styles/tokens.scss";
        @import "@/styles/mixins.scss";
        `
      }
    }
  }
}
