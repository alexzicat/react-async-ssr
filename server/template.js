export default (html, css = '', js = '') => {
  return (
    `<!DOCTYPE html>
    <html>
    <head>
      <title>Loadables</title>
      <link rel="icon" type="image/png" sizes="16x16" href="favicon.png">
      ${css}
    </head>
    <body>
      <div id="app">${html}</div>
      ${js}
    </body>
    </html>`
  );
};
