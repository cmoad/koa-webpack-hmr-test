const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: [
    'webpack-hot-middleware/client',
    './index.js',
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  devServer: {
    port: 5000,
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: [['es2015', { modules: false }]],
        plugins: [
          'syntax-dynamic-import',
          'transform-async-to-generator',
          'transform-regenerator',
          'transform-runtime',
        ],
      },
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.IgnorePlugin(/webpack/),
  ],
};
