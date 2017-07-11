const StatsPlugin = require('stats-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './client',
  plugins: [
    new StatsPlugin('../../stats.json'),
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
