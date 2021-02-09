const express = require('express');
const server = express();
const path = require('path');
const cors = require('cors');
const port = 3001;
const fs = require('fs');
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
  controller.determine('route1', JSON.stringify(req.body), (err, data) => {
    if (err) {
      res.status(500).send('Error writing data: ', err);
    } else {
      res.status(200).send(data);
    }
  })
})
server.use('/api/route2', (req, res) => {
  controller.determine('route2', null, (err, data) => {
    if (err) {
      res.status(400).send('No data found');
    } else {
      res.status(200).send(data);
    }
  })
})

server.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
