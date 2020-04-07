const DefinePlugin = require('webpack').DefinePlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = env => {
  const pluginsOptions = {
    plugins: [
      new DefinePlugin({
        'process.env': {
          API_URL: JSON.stringify(`${process.env.API_URL}`),
        }
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:4].css',
        chunkFilename: '[id].[contenthash:4].css'
      })
    ]
  };

  if (env.MODE === 'prod') {
    pluginsOptions.plugins.push(new CleanWebpackPlugin());
  }
  return pluginsOptions;
};
