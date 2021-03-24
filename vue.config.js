module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/Vue3-Resources-App" : "/",
  configureWebpack: {
    devtool: "source-map",
  },
};
