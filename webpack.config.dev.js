var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr',
    './javascripts/app.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3001/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: [
        path.join(__dirname, 'javascripts')
      ]
    }]
  }
};
