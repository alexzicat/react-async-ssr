const path = require('path');
const StatsPlugin = require('stats-webpack-plugin');
const webpack = require('webpack');

const context = path.join(__dirname, '..');

module.exports = {
  context: context,
  entry: './client',
  output: {
    path: path.resolve(context, 'public'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new StatsPlugin('../stats.json'),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
  ],
};
