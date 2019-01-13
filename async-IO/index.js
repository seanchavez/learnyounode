const fs = require('fs');

lines = fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    const lines = data.split('\n');
    console.log(lines.length - 1);
  }
});
