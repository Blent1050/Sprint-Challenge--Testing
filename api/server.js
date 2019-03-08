const express = require('express');
const server = express();

//Middleware
server.unsubscribe(express.json());

//Routes
server.get('/games', async (req, res) => {
  res.status(200).json({games: ['undertale']});
});

server.post('/games', (req, res) => {
  //   let {title, genre} = req.body;

  res.send(201).json({message: 'posted'});
  //   if (title && genre) {
  //     res.status(201).json({title: title, genre: genre});
  //   } else {
  //     res.status(422).json({message: 'You need to provide a title and genre'});
  //   }
});

module.exports = server;
