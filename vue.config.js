module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/Scrum-Interactive-Game/' : '/',
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Scrum'
      args[0].keywords = 'Scrum 介紹'
      args[0].description = '透過互動遊戲來介紹 Scrum 工作法的知識點'
      return args
    })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/assets/scss/utils/_variables.scss";
          @import "~@/assets/scss/utils/_animations.scss";
          @import "~@/assets/scss/utils/_mixins.scss";
        `
      }
    }
  }
}
