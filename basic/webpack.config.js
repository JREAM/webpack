
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/javascripts/main.js',
    './src/stylesheets/main.scss'
  ],
  output: {
    filename: 'dist/bundle.js'
  },
  module: {

    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1',
        }),
      },
      {
        test: /\.(s[ac]ss)$/,
        loader: ExtractTextPlugin.extract([
          'css-loader', 'sass-loader'
        ])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/[name].bundle.css',
      allChunks: true,
    }),
  ]
};
