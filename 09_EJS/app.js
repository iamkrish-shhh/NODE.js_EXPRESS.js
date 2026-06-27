// core module
const path =  require('path')

// external module
const express = require('express')

//local module
const userRouter = require("./routes/userRouter")
const {hostRouter} = require("./routes/hostRouter")
// const rootDir = require("./utils/pathUtil")

const app = express()

// installin ejs
app.set('view engine', 'ejs')
app.set('views','views')

app.use(express.urlencoded( extended = true))

app.use(userRouter)
app.use("/host",hostRouter)

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle : 'error'})
})


app.listen(4000,()=> {
    console.log(`Running at http://localhost:${4000}`);
})