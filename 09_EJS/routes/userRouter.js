// core module
const path = require('path')

// external module
const express = require('express')
const userRouter = express.Router()

// local module
// const rootDir = require("../utils/pathUtil")  //removed
const {registeredHomes} = require("./hostRouter")


userRouter.get('/',(req,res,next)=> {   
    res.render('home', {registeredHomes : registeredHomes , pageTitle : 'airbnb home', currentPage: 'home'} )
})

module.exports = userRouter