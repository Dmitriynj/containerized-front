const merge = require('webpack-merge');
const { resolve } = require('path');
const optimization = require('./webpack/optimization');
const plugins = require('./webpack/plugins');
const entryOutput = require('./webpack/entryOutput');
const loaders = require('./webpack/loaders');
const html = require('./webpack/html');
const devServer = require('./webpack/devServer');

const sourcePath = resolve(__dirname, 'src');
const distPath = resolve(__dirname, 'dist');
const hash = 'hash';

module.exports = env => {
  return merge(
    {
      mode: 'development',
      devtool: 'source-map',
      performance: { hints: false }
    },
    entryOutput(sourcePath, distPath, hash, env),
    loaders(sourcePath, hash),
    html(sourcePath),
    devServer,
    optimization,
    plugins(env)
  );
};
