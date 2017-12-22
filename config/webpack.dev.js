const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', {
            loader: 'sass-loader',
            options: {
              includePaths: ['src/scss']
            }
          }]
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
});
