const http = require('http')
// const requestHandler = require('./handler')

const server = http.createServer((req, res) => {
    console.log(req)
})

const port = 5000
server.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
})