require('dotenv-extended').load();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use('/',routes);

exports.webhook = (req, res) => {
  if (!req.url.startsWith('/')) {
    req.url = `/${req.url}`; // Prepend a slash to the URL
  }
  return app(req, res);
};