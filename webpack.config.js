/* jshint browserify: true */

const webpack = require('webpack');

module.exports = {
  entry: {
    App: './static/js/App.jsx'
  },
  output: {
    path: __dirname + '/static/build',
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets:['es2015','react']
      }
    },{
      test: /\.scss$/,
      loader: 'style!css!autoprefixer!sass?sourceMap'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    react: 'React'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
  ]
};
