const fs = require('fs')
module.exports = (filename, successFn, errorFn) =>
  fs.readFile(filename, (err, data) => err ? errorFn(err) : successFn(data))