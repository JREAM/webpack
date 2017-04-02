'use strict';
/**
 * ---------------------------------------------------
 * Table of Contents
 * ---------------------------------------------------
 *  > Require NPM(s)
 *  > Entry, Output and DevServer
 *    (config)
 *  > Loaders
 *  > Plugins
 *  > Final Export
 *
 *                ~ Jreaming of better Dev | JREAM.com
 * ---------------------------------------------------
 */


/**
 * ---------------------------------------------------
 *  Require NPM(s)
 * ---------------------------------------------------
 */
const path = require('path');
const _ = require('lodash');

const autoprefixer      = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * ---------------------------------------------------
 *  Entry, Output and DevServer
 *  (config)
 * ---------------------------------------------------
 */
const PATH_SRC = './src';  // [No Trailing Slash]
const PATH_DIST= './dist'; // [No Trailing Slash]


const entry = _.replace('%s/app.js', '%s', PATH_SRC);
const output = {
    filename: 'bundle.js',
    path:     path.resolve(__dirname, PATH_DIST),
    sourceMapFilename: '[file].map',
    // https://webpack.js.org/configuration/output/#output-publicpath
    // publicPath: './assets/'
};
const devServer = {
  proxy: {
    '/': 'http://localhost:3000'
  }
};


/**
 * ---------------------------------------------------
 *  Loaders
 * ---------------------------------------------------
 */
const loaders = [
    // * Place CSS Before SASS Loader
    // start:CSS
    {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        'postcss-loader'
      ]
    }, // end:CSS

    // start:SASS
    {
      test: /\.s[ac]ss$/,
      use: [
        // *The style-loader/css-loader immediately applies style to DOM

        // creates style nodes from JS strings
        {loader: 'style-loader'},

        // translates CSS into CommonJS
        {loader: 'css-loader'},

        // compiles Sass to CSS
        {
          loader: 'sass-loader',
          options: {
            includePaths: [
              path.resolve(__dirname, _.replace('%s/stylesheets', '%s', PATH_SRC))
            ]
          }
        }

      ]
    }, // end:SASS

    // start:HTML
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          attrs: ['img:src', 'link:href']
        }
      }]
    } // end:HTML
];


/**
 * ---------------------------------------------------
 *  Plugins
 * ---------------------------------------------------
 */
const plugins = [
  // For Development
  new ExtractTextPlugin('[name].css')
];


/**
 * ---------------------------------------------------
 *  Final Export
 * ---------------------------------------------------
 */
module.exports = {
  entry: entry,
  module: {
    rules: loaders
  },
  output: output,
  // Slowest for build speeds, for Development
  devtool: 'source-map',
  plugins: plugins,
  devServer: devServer,
  // Abs path for webpack, module loaders resolve from here
  // context: __dirname
};
