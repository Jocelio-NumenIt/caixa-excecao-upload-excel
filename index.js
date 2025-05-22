'use strict';

const express = require('express');
const fs = require('fs');

// Constants
const PORT = 8082;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/health', (req, res) => {
  res.send('Healthcheck OK');
});

app.get('/', (req, res) => {
  const template = fs.readFileSync('./index.html', 'utf8')
  res.send(template);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);