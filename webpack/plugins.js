const DefinePlugin = require('webpack').DefinePlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = env => {
  const pluginsOptions = {
    plugins: [
      new DefinePlugin({
        'process.env': {
          API_URL: JSON.stringify(`${process.env.API_URL}`),
          APP_ID: JSON.stringify(`${process.env.APP_ID}`),
          API_KEY: JSON.stringify(`${process.env.API_KEY}`)
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
