// core module
const path =  require('path')

// external module
const express = require('express')

//local module
const userRouter = require("./routes/userRouter")
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil")

const app = express()

app.use(express.urlencoded())

app.use(userRouter)
app.use("/host",hostRouter)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,"views","404.html"))
})


app.listen(4000,()=> {
    console.log(`Running at http://localhost:${4000}`);
})