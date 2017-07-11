const NodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

const context = path.join(__dirname, '..', '..');
const isDev = process.env.NODE_ENV !== 'production';
const config = isDev ? require('./development.config') : require('./production.config');

module.exports = Object.assign(config, {
  target: 'node',
  context,
  entry: './server',
  output: {
    path: path.resolve(context, 'dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      }
    ]
  },
  externals: new NodeExternals({
    whitelist: [/^react-universal-component/, /^require-universal-module/, /^webpack-flush-chunks/]
  })
});
