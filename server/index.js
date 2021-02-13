import express from 'express';
import path from 'path';
import { sharksList, catsList } from '../src/images';

const app = express()
const port = process.env.PORT || 3000;

const HTML_FILE = path.join(__dirname, '../index.html');

// const { sharksList, catsList } = require('../src/images');
// const { shuffle } = require('../src/utility');

app.get('/', (req, res) => {
  // res.send(shuffle([...catsList, ...sharksList]));
  res.sendFile(HTML_FILE);
});

app.get('/cats', (req, res) => {
  res.send(catsList)
});

app.get('/sharks', (req, res) => {
  res.send(sharksList)
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})