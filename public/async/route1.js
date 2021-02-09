const fs = require('fs');
const path = require('path');

exports.write = (data, callback) => {
  fs.writeFile(path.join(__dirname, '../data/data.txt'), data, {flag: 'w'}, (err, text) => {
    if (err) {
      callback(err);
    } else {
      callback(null, 'File Successfully Written.')
    }
  })
}