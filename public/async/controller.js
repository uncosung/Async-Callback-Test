const route1 = require('./route1.js');
const route2 = require('./route2.js');

exports.determine = (route, data, callback) => {
  if (route === 'route1') {
    route1.write(data, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res)
      }
    })
  }
  if (route === 'route2') {
    route2.read((err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    })
  }
}