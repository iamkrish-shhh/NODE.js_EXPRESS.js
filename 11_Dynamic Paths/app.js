// external module
const express = require('express')

//local module
const userRouter = require("./routes/userRouter")
const {adminRouter} = require("./routes/adminRouter")
const errorController = require('./controllers/error')

const app = express()

// installin ejs
app.set('view engine', 'ejs')
app.set('views','views')

app.use(express.urlencoded( extended = true))

app.use(userRouter)
app.use("/admin",adminRouter)

app.use(errorController.get404)

app.listen(4000,()=> {
    console.log(`Running at http://localhost:${4000}`);
})