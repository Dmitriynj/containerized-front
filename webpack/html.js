const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (sourcePath) => ({
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      template: resolve(sourcePath, 'index.html'),
      minify: true
    })
  ]
});
