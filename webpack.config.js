const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  mode: mode,
  entry: {
    index: './app/lib/index.js',
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
      // {
      //   test: /\.css$/i,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"],
      // },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './app/lib',
  },
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'app/static'),
  },
};
