const Home = require('../models/home')

exports.getAddHome = (req,res,next)=> {
    res.render('add-home', { pageTitle : 'Add home', currentPage: 'add-home'} )
}

exports.postAddHome = (req,res,next)=> {
    const {houseName, price, location, occupancy} = req.body
    const home = new Home(houseName, price, location, occupancy)
    home.save()
    
    res.render('home-added', { pageTitle : 'Home Added', currentPage: 'home-added'} )
}

exports.getHome = (req,res,next)=> {  
    const registeredHomes = Home.fetchAll(registeredHomes => 
        res.render('home', {
            registeredHomes : registeredHomes , pageTitle : 'airbnb home', currentPage: 'home'
        } )
    ) 
}

