const http = require('http')
const requestHandler = require('./handler')

const server = http.createServer(requestHandler)

const port = 5000
server.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
})