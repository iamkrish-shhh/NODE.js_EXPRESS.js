// external module
const express = require('express')
const userRouter = express.Router()

// local module
const userController = require('../controllers/userController')


userRouter.get('/',userController.getIndex)
userRouter.get('/home',userController.getHome)
userRouter.get('/Bookings',userController.getBookings)
userRouter.get('/Favourites',userController.getFavouriteList)

module.exports = userRouter