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