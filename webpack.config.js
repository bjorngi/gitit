var webpack = require('webpack');
var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

var BUILD_DIR_DEV = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: {
    app: APP_DIR + '/index.js',
    vendor: [
      'react',
      'react-dom',
      'redux',
      'redux-thunk'
    ]
  },
  output:{
    path: BUILD_DIR_DEV,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test:   /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: path.resolve(APP_DIR, 'components'),
      assets: path.resolve(APP_DIR, 'assets'),
      actions: path.resolve(APP_DIR, 'actions'),
      api: path.resolve(APP_DIR, 'api'),
      common: path.resolve(APP_DIR, 'common')
    }
  },
  postcss: function() {
    return [precss, autoprefixer];
  },
  devServer: {
      historyApiFallback: true,
      disableHostCheck: true
  },
  devtool: 'source-map'
};

module.exports = config;
