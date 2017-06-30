const NodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'node',
  context: __dirname,
  entry: './server',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
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
  ],
  externals: new NodeExternals({
    whitelist: [
      /^react-universal-component/,
      /^require-universal-module/,
      /^webpack-flush-chunks/,
    ],
  }),
};
