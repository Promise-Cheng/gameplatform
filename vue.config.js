

module.exports = {
  lintOnSave: false,
  assetsDir: 'static',
  publicPath: process.env.VUE_APP_PUBLIC_PATH || '/',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData: `@import "~@/assets/styles/prefix.scss";`
  //     }
  //   }
  // },
  devServer: {
    open: true,
    // https: true,
    port: 3001,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    proxy: require("./config/proxy"),
  },
};
