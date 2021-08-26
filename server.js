const server = require('http').createServer()
const fileHandler = require('./filehandler')
const { types, rootFolder, defaultIndex } = require('./config')
const parse = require('url').parse

function onRequest(req, res) {
  let filename = parse(req.url).pathname

  if (filename === '/') filename = defaultIndex

  const fullPath = rootFolder + filename
  const extension = filename.substr(filename.lastIndexOf('.') + 1)

  fileHandler(fullPath, data => {
    res.writeHead(200, {
      'Content-Type': types[extension] || 'text/plain',
      'Content-Length': data.length,
      'X-Powered-By': 'LpcNca'
    })
      res.end(data)
    },
    err => {
    res.writeHead(404)
    res.end()
  })
}

server.on('request', onRequest)

module.exports = server