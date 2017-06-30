export default (html, js) => {
  return (
    `<!DOCTYPE html>
    <html>
    <head>
      <title>Loadables</title>
    </head>
    <body>
      <div id="app">${html}</div>
      ${js}
    </body>
    </html>`
  );
};
