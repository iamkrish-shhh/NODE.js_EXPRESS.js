
// external module
const express = require('express')
const adminRouter = express.Router()

// local module
const adminController = require('../controllers/adminController')


adminRouter.get('/add-home',adminController.getAddHome)

adminRouter.post('/add-home',adminController.postAddHome)

adminRouter.get('/admin-home-list',adminController.getAdminHome)


exports.adminRouter = adminRouter


