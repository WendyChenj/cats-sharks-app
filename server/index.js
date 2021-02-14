const express = require('express')
const path = require('path')
const { sharksList, catsList, imagesList } = require('../server/images')

const app = express()
const port = process.env.PORT || 3000
const DIST_DIR = path.resolve(__dirname, '../dist')

app.use(express.static(DIST_DIR))
// const { shuffle } = require('../src/utility');

app.get('/', (req, res) => {
  const HTML_FILE = path.join(DIST_DIR, 'index.html');
  res.sendFile(HTML_FILE);
})

app.get('/api/:animalType', (req, res) => {
  console.log(req.params);
  switch(req.params.animalType) {
    case 'images':
      res.send(imagesList);
      break;
    case 'sharks':
      res.send(sharksList);
      break;
    case 'cats':
      res.send(catsList);
      break
    default:
      return;
  }
})

app.get('/api/sharks', (req, res) => {
  res.send(sharksList)
})

app.get('/api/imagesList', (req, res) => {
  res.send(imagesList)
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})