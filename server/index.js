import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import {flushChunkNames} from 'react-universal-component/server'
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';
import flushChunks from 'webpack-flush-chunks';

import createMiddlewares from './hot-reloading';
import renderTemplate from './template';
import App from '../client/components/App';

const app = express();
const webpackStats = JSON.parse(fs.readFileSync('./stats.json'));

app.use(express.static('public'));

if (process.env.NODE_ENV !== 'production') {
  createMiddlewares(app);
}

app.get('*', function(request, response) {
  const context = {};
  const sheet = new ServerStyleSheet();

  const Tutorial = () => {
    return (
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter context={context} location={request.url}>
          <App/>
        </StaticRouter>
      </StyleSheetManager>
    );
  };

  const html = renderToString(<Tutorial/>);

  if (context.statusCode === 404) {
    response.status(404);
  }

  const {js} = flushChunks(webpackStats, {
    before: [
      'manifest', 'vendor',
    ],
    chunkNames: flushChunkNames(),
  });

  const css = sheet.getStyleTags();

  response.send(renderTemplate(html, css, js));
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
