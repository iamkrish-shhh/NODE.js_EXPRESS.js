const Home = require('../models/home')

exports.getAddHome = (req,res,next)=> {
    res.render('admin/add-home', { pageTitle : 'Add home', currentPage: 'add-home'} )
}

exports.getAdminHome = (req,res,next)=> {  
    const registeredHomes = Home.fetchAll(registeredHomes => 
        res.render('admin/admin-home-list', {
            registeredHomes : registeredHomes , pageTitle : 'Admin Home List', currentPage: 'admin-home'
        } )
    ) 
}

exports.postAddHome = (req,res,next)=> {
    const {houseName, price, location, occupancy} = req.body
    const home = new Home(houseName, price, location, occupancy)
    home.save()
    
    res.render('admin/home-added', { pageTitle : 'Home Added', currentPage: 'home-added'} )
}





