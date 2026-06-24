// external module
const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log(req.url);
    next()
})
app.use((req, res, next) => {
    console.log(req.method);
    next()
})
// app.use((req, res, next) => {
//     // res.send('<p>sending the response</p>')
//     next()
// })

app.get('/',(req, res, next) => {
    res.send(`<h1>You are on HomePage</h1>
            <a href = "/contact-us">CONTACT US</a>        
        `)
    next()
})
app.get('/contact-us',(req, res, next) => {
    res.send(`<h2>Please give your details here</h2>
            <form action= "/contact-us" method="POST">
            <input name= "name" placeholder = "Name"> 
            <input name= "email" placeholder = "Email"> 
            <button type="submit">SUBMIT</button>
            </form>
        `)
    next()
})
app.post('/contact-us',(req, res, next) => {
    res.send(`<h3>Thankyou for contacting us</h3>`)
})


app.listen(3000,()=> {
    console.log(`Server is running on port http://localhost:${3000}`)
})