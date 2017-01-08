const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    'index': './src/index.js'
  },
  output: {
    path: __dirname + '/build',
    publicPath: './',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1!postcss-loader'
        })
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin({filename: 'app.css'}),
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
  },
  devServer: {
    historyApiFallback: true,
    port: 4000,
    hot: true,
    inline: true,
    contentBase: './'
  }
};
