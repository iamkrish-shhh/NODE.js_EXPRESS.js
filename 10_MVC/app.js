// external module
const express = require('express')

//local module
const userRouter = require("./routes/userRouter")
const {hostRouter} = require("./routes/hostRouter")
const errorController = require('./controllers/error')

const app = express()

// installin ejs
app.set('view engine', 'ejs')
app.set('views','views')

app.use(express.urlencoded( extended = true))

app.use(userRouter)
app.use("/host",hostRouter)

app.use(errorController.get404)

app.listen(4000,()=> {
    console.log(`Running at http://localhost:${4000}`);
})