const fs = require('fs');
const path = reequire('path');

module.exports = (dir, ext, callback) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return callback(err);
    }
    const list = files.filter(file => {
      return path.extname(file) === '.' + ext;
    });
    callback(null, list);
  });
};
