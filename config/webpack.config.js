const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // adjust if your entry point is different
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    clean: true, // clean the output directory before emit
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // for React/JSX files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i, // for styles
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // for images
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // resolve these extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // make sure this file exists
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, '../dist'),
    port: 3000,
    open: true,
    hot: true,
  },
  mode: 'development',
};