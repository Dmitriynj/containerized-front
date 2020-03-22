const merge = require('webpack-merge');
const { resolve } = require('path');
const optimization = require('./webpack/optimization');
const plugins = require('./webpack/plugins');
const entryOutput = require('./webpack/entryOutput');
const loaders = require('./webpack/loaders');
const uglify = require('./webpack/uglify');
const html = require('./webpack/html');

const sourcePath = resolve(__dirname, 'src');
const distPath = resolve(__dirname, 'dist');
const hash = 'contenthash';

module.exports = env => {
  return merge(
    {
      mode: 'production'
    },
    entryOutput(sourcePath, distPath, hash, env),
    loaders(sourcePath, hash),
    html(sourcePath),
    optimization,
    uglify,
    plugins(env)
  );
};
