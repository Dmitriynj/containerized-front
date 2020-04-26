const webpack = require('webpack');

const DEV_HOST = '127.0.0.1';
const DEV_PORT = '3000';

const PROXY_STATUS = false; // true for enable proxy
const PROXY_CONTEXT = ['/api'];
const PROXY_TARGET = '127.0.0.1:81';
const PROXY_REWRITE = {};

let devServer = {
  host: DEV_HOST,
  port: DEV_PORT,
  historyApiFallback: true,
  disableHostCheck: true,
  /**
   * comment next line when delpoing
   * do not comment this line for docker-compose development
   */
  public: 'startup.com:3001',
  publicPath: '/',
  hot: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
};

if (PROXY_STATUS) {
  devServer = {
    ...devServer,
    proxy: [
      {
        context: PROXY_CONTEXT,
        target: PROXY_TARGET,
        pathRewrite: PROXY_REWRITE,
        secure: false,
        changeOrigin: true,
        ws: true,
      },
    ],
  };
}

module.exports = {
  devServer,
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
