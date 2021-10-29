const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}
console.log(mode);
module.exports = {
  mode: mode,
  entry: {
    main: path.join(__dirname, './_modulr/main.js'),
  },
  // where to output dist
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'app/static'),
    // clean: true,
  },
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
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.min.css',
    }),
  ],
  optimization: {
    // This will enable CSS optimization only in production mode.
    minimizer: [new CssMinimizerPlugin(), new TerserJSPlugin({})],
    // minimize: true, // in development mode
  },
};
