var path = require('path'),
    db = 'mongodb://localhost:27017/bp',
    root = path.join(__dirname, '../..');

module.exports = {
  db: db,
  root: root
};
