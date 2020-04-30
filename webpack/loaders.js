const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Sass = require('sass');

module.exports = (sourcePath, hash) => ({
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: { minimize: true },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: { implementation: Sass },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
        include: sourcePath,
      },
      {
        test: /\.(png|gif|jpg|jpeg|webp)$/i,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10000, name: 'assets/icons/[name].[ext]' },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          { loader: 'file-loader', options: { name: `fonts/[${hash}].[ext]` } },
        ],
      },
    ],
  },
});
