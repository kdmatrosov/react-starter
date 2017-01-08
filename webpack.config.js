const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    'index': './src/index.js'
  },
  output: {
    path: __dirname + '/bundle',
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
      }]
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
