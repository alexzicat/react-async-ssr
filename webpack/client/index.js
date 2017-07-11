const path = require('path');
const StatsPlugin = require('stats-webpack-plugin');
const webpack = require('webpack');

const context = path.resolve(__dirname, '..', '..');
const isDev = process.env.NODE_ENV !== 'production';
const config = isDev ? require('./development.config') : require('./production.config');

module.exports = Object.assign(config, {
  context,
  output: {
    path: path.resolve(context, 'public'),
    filename: 'js/[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
    ],
  },
});
