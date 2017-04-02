'use strict';
const path = require('path');  // built into node

// utility
var _ = require('lodash');

// for SASS
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

// main config
const config = {

  // str | obj | arr
  // Where webpack starts exec
  entry: [
    './entry.js'
  ],

  modules: {

    devtool: 'source-map',

    rules: [{
        test: /\.scss$/,
        use: [{
            loader: 'style-loader' // creates style nodes from JS strings
        }, {
            loader: 'css-loader' // translates CSS into CommonJS
        }, {
            loader: 'sass-loader' // compiles Sass to CSS
            // , options: {
            //   includePaths: ['absolute/path/a', 'absolute/path/b']
            // }
        }]


    }] // end of 'rules'

  },

  // Where compilation/results go
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    // Where index file is for site
    publicPath: '/assets',
    sourceMapFilename: '[file].map'
  },

  plugins: [
    // For development (Yea?)
    new ExtractTextPlugin('[name].css')
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.sass', '.scss'],
    root: [path.join(__dirname, './src')]
  }

}

module.exports = config;
