const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const { whenDev } = require("@craco/craco");

module.exports = {
  babel: {
    plugins: [whenDev && require.resolve("react-refresh/babel")],
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions;
    },
  },
  webpack: {
    plugins: [whenDev && new ReactRefreshPlugin()],
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    },
  },
};
