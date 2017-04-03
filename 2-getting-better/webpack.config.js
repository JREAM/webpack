
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/javascripts/main.js',
    './src/stylesheets/main.scss'
  ],
  output: {
    filename: 'dist/bundle.js',
    // the url to the output directory resolved relative to the HTML page
    // It should match devServer.publicPath
    publicPath: '/assets/'
  },
  devServer: {
    contentBase: [
      path.join(__dirname, 'html'),
      path.join(__dirname, 'assets')
    ],
    // Make sure publicPath always starts and ends with a forward slash.
    publicPath: '/assets/',
    // It is recommended that devServer.publicPath is the same as output.publicPath.
    compress: true,
    port: 9000
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
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/[name].bundle.css',
      allChunks: true,
    }),
  ]
};
