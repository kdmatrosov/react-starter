const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rules = require('./webpack.config/rules');
module.exports = {
  entry: {
    'index': './src/index.js'
  },
  output: {
    path: __dirname + '/build',
    publicPath: './',
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: rules
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({filename: '[name].[chunkhash].css'}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    }),
    new WebpackShellPlugin({
      onBuildStart: ['echo "Webpack Start"'],
      onBuildEnd: ['echo "Webpack End"']
    }),
    new HtmlWebpackPlugin({
      cashe: true,
      template: './webpack.config/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
