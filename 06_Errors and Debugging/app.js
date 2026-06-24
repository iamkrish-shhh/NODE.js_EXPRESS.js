const http = require('http')
const testingSyntax = require('./syntax')
const runtime = require('./runtime')
const logical = require('./logical')

const server = http.createServer((req, res) => {
    console.log(req.url,req.method)
    testingSyntax()
    runtime()
    logical()
})

const port = 5000
server.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
})