const express = require('express');
const server = express();
const path = require('path');
const cors = require('cors');
const port = 3001;
const bodyParser = require('body-parser');
const controller = require('../async/controller.js');

server.use(express.static(path.join(__dirname, '../../client/dist')));
server.use(cors());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Origin, X-Requested-With, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, PATCH");
  next();
});
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));

server.use('/api/route1', (req, res) => {
  //TODO
})
server.use('/api/route2', (req, res) => {
  //TODO
})

server.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
