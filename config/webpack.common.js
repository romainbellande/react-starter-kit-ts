const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/index.tsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      /**
       * File loader for supporting images, for example, in CSS files.
       */
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },

      /* File loader for supporting fonts, for example, in CSS files.
      */
      {
        test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
        use: 'file-loader'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([path.resolve('dist')]),
    HtmlWebpackPluginConfig,
    /**
     * Plugin: CopyWebpackPlugin
     * Description: Copy files and directories in webpack.
     *
     * Copies project static assets.
     *
     * See: https://www.npmjs.com/package/copy-webpack-plugin
     */
    new CopyWebpackPlugin([
      { from: path.resolve('src/assets'), to: path.resolve('dist/assets') },
    ]
    ),
  ]
};
