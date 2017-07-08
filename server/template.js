export default (html, css = '', js = '') => {
  return (
    `<!DOCTYPE html>
    <html>
    <head>
      <title>Loadables</title>
      ${css}
    </head>
    <body>
      <div id="app">${html}</div>
      ${js}
    </body>
    </html>`
  );
};
