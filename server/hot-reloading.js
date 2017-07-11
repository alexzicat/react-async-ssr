import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from '../webpack/client';

webpackConfig.context = path.resolve('.');
const compiler = webpack(webpackConfig);

const createMiddlewares = (app) => {
  app.use(webpackDevMiddleware(compiler, {
    quiet: true,
  }));

  app.use(webpackHotMiddleware(compiler, {
    quiet: true,
  }));
};

export default createMiddlewares;
