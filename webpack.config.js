const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const rules = require('./webpack.config/rules');
module.exports = {
  entry: {
    'index': './src/index.js'
  },
  output: {
    path: __dirname + '/bundle',
    publicPath: './',
    filename: '[name].js'
  },
  devtool: 'cheap-inline-module-source-maps',
  module: {
    rules: rules
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({filename: 'app.css'}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    port: 4000,
    hot: true,
    inline: true,
    contentBase: './'
  }
};
