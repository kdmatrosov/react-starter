const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = [
  {
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
  }
];