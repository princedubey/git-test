const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const { connectToDatabase } = require('./src/database/connection')
const mysql = require('mysql2')

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/prince', (req, res) => {
  res.send('Welcome prince');
});

connectToDatabase()

app.use(cors())
app.use(bodyParser.json())

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});