process.title = 'MyWebServer'
let args = process.argv
let port = args[2] || 7070

const webServer = require('./server')

webServer.listen(port, () => console.log(`Server at port ${port} in ${new Date()}`))