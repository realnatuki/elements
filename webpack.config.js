const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');
let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode: mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // reads lef to right
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          // 'postcss-loader',
          // 'sass-loader',
        ],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    // import third party js libs like jquery
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    // minify css
    new MiniCssExtractPlugin({
      filename: 'main.min.css',
    }),
  ],
  optimization: {
    // This will enable CSS optimization only in production mode.
    minimizer: [new CssMinimizerPlugin()],
    // minimize: true, // in development mode
  },
  entry: {
    main: path.join(__dirname, 'app/_modulr/main.js'),
  },
  // where to output dist
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'app/static'),
    //clean: true,
  },
};
