const filterFileByExt = require('./filterFileByExt');
const dir = process.argv[2];
const ext = process.argv[3];

filterFileByExt(dir, ext, (err, list) => {
  if (err) {
    console.error(err);
  } else {
    list.forEach(file => {
      console.log(file);
    });
  }
});
