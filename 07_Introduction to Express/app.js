// external module
const express = require('express')

// local module
const requestHandler = require('./user')



const app = express()  // express is a function, it returns an express app object.

// Adding Middleware 
app.get('/',(req,res,next)=> {
    console.log('came in 1st Middleware!',req.url,req.method);
    // res.send(`<p>came from 1st middleware!</p>`)
    next()
})

app.post('/submit-details',(req,res,next)=> {
    console.log('came from 2nd Middleware!',req.url,req.method);
    next()
})

app.use('/',(req,res,next)=> {
    console.log('came in another Middleware!',req.url,req.method);
    res.send(`<p>came from another middleware!</p>`)
    next()
})





app.listen(3000,() => {
    console.log(`running at http://localhost:${3000}`);    
})