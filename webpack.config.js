var webpack = require('webpack');
var path = require('path');

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
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test:   /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [{removeTitle: false}],
                floatPrecision: 2
              }
            }
          }
        ]
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(APP_DIR, 'components'),
      assets: path.resolve(APP_DIR, 'assets'),
      styles: path.resolve(APP_DIR, 'styles'),
      icons: path.resolve(APP_DIR, 'assets/icons')
    }
  },
  plugins: [],
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true
  },
  devtool: 'source-map'
};

module.exports = config;
