const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = [
  {
    loader: 'babel-loader',
    test: /\.js$/,
    exclude: /node_modules/,
    query: {
      presets: ['react', 'es2015', 'stage-1']
    }
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        {
          loader: 'postcss-loader'
        }
      ]
    })
  },
  {
    test: /\.html$/,
    loader: 'html-loader'
  }
];