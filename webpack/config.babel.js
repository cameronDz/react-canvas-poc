import HtmlWebPackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
import { resolve } from 'path';

module.exports = {
  entry: resolve(__dirname, '..', './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', '/dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    watchContentBase: true
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_module/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.html$/,
      use: {
        loader: 'html-loader'
      }
    }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: resolve(__dirname, '..', './src/index.html'),
      filename: './index.html'
    }),
    new HotModuleReplacementPlugin()
  ]
};
