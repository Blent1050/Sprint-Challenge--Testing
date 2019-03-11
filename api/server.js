const express = require('express');
const server = express();

//Middleware
server.use(express.json());

//Routes
server.get('/games', async (req, res) => {
  res.status(200).json({games: ['undertale']});
});

server.post('/games', (req, res) => {
  let {title, genre} = req.body;

  if (!title && !genre) {
    res.status().json('Please provide a title and genre');
  } else {
    res.status(201).json({title, genre});
  }
});

module.exports = server;
