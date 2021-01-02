const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //@就是src
        'components': '@/components',
        'common': '@/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : "./"
}