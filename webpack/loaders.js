const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Sass = require('sass');

module.exports = (sourcePath, hash) => ({
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: { minimize: true }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: { implementation: Sass }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: sourcePath
      },
      {
        test: /\.(png|gif|jpg|jpeg|webp|svg)$/i,
        use: [{ loader: 'url-loader', options: { limit: 10000, name: 'assets/img/[name].[ext]' } }]
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{ loader: 'file-loader', options: { name: `fonts/[${hash}].[ext]` } }]
      }
    ]
  }
});
