const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = [
  {
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: ['react', 'es2015', 'stage-1']
    }
  },
 /* {

    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('css-loader?importLoaders=1!postcss-loader!sass-loader')
  }*/
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
        },
        {
          loader: 'sass-loader'
        }
      ]
    })
  },
  {
    test: /\.html$/,
    loader: 'html-loader'
  }
];