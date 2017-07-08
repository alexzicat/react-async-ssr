const NodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

const context = path.join(__dirname, '..');

module.exports = {
  target: 'node',
  context: context,
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
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  externals: new NodeExternals({
    whitelist: [/^react-universal-component/, /^require-universal-module/, /^webpack-flush-chunks/]
  })
};
