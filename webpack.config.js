const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const rules = require('./webpack.config/rules');
const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');
console.log(`--${NODE_ENV}`);
module.exports = {
  entry: {
    'index': './src/index.js'
  },
  output: {
    path: __dirname + '/bundle',
    publicPath: '/',
    filename: '[name].js'
  },
  devtool: 'cheap-inline-module-source-maps',
  watch: false,
  watchOptions: {
    aggregateTimeout: 100
  },
  module: {
    rules: rules
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin({filename: 'app.css', allChunks: true}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 4000,
    contentBase: './bundle',
    inline: true,
    hot: true
  }
};
