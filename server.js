const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Dit is mijn eigen Server-Side Rendered applicatie!</h1><p>Gedeployed via GitHub Actions en beveiligd met Caddy HTTPS.</p>');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
