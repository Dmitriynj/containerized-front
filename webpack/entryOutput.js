const { resolve } = require('path');

module.exports = (sourcePath, distPath, hash, env) => ({
  entry: resolve(sourcePath, 'index.js'),
  output: {
    pathinfo: true,
    path: distPath,
    publicPath: env.MODE === 'prod' ? '/dist' : '/',
    filename: `js/[${hash}].js`,
    chunkFilename: `js/chunk/[name].[${hash}].js`
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', sourcePath]
  }
});
