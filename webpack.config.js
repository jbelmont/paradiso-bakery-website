/* jshint browserify: true */

const webpack = require('webpack');

module.exports = {
  entry: {
    Bakery: './static/js/Bakery.jsx'
  },
  output: {
    path: __dirname + '/static/build',
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
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
