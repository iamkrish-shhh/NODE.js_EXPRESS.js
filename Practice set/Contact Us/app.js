//core module
const path = require('path')

// external module
const express = require('express')

// local module
const homeRouter = require("./routes/homeRouter")
const contactRouter = require("./routes/contactRouter")
const rootDir = require("./utils/pathUtil")

const app = express()

app.use(express.urlencoded())

app.use(homeRouter)
app.use(contactRouter)

app.use((req,res) => {
    res.status(404).sendFile(path.join(rootDir,"views","404.html"))
})

app.listen(3000,()=> {
    console.log(`Server is running on port http://localhost:${3000}`)
})