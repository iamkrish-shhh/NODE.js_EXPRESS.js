// core module
const path = require('path')

// external module
const express = require('express')
const hostRouter = express.Router()

// local module
// const rootDir = require("../utils/pathUtil")


hostRouter.get('/add-home',(req,res,next)=> {
    res.render('add-home', { pageTitle : 'Add home', currentPage: 'add-home'} )
})

const registeredHomes= []

hostRouter.post('/add-home',(req,res,next)=> {
    registeredHomes.push({houseName : req.body.houseName, price : req.body.price, location : req.body.location , occupancy : req.body.occupancy})
    console.log(req.body);
    
    res.render('home-added', { pageTitle : 'Home Added', currentPage: 'home-added'} )
})


exports.hostRouter = hostRouter
exports.registeredHomes = registeredHomes

