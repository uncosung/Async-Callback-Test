const fs = require('fs');
const path = require('path');

exports.read = (callback) => {
  fs.readFile(path.join(__dirname, '../data/data.txt'), (err, text) => {
    if (err) {
      callback(err);
    } else {
      callback(null, text)
    }
  })
}