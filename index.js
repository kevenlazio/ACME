const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, this is the ACME API!');
});

app.get('/config', (req, res) => {
  const config = {
    appName: process.env.APP_NAME || 'Default Acme App by Keven',
    appVersion: process.env.APP_VERSION || '1.0',
  };
  res.json(config);
});

app.get('/healthcheck', (req, res) => {
  res.send('Healthcheck Status: OK');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
