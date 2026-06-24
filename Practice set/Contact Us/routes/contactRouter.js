//core module
const path = require('path')

// external module
const express = require('express')
const contactRouter = express.Router()

// local module
const rootDir = require("../utils/pathUtil")



contactRouter.get('/contact-us',(req, res, next) => {
    res.sendFile(path.join(rootDir,"views","contact-us.html"))
})


contactRouter.post('/contact-us',(req, res, next) => {
    res.sendFile(path.join(rootDir,"views","Thankyou.html"))
    console.log(req.body);
})


module.exports = contactRouter