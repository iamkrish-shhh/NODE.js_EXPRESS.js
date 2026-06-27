const Home = require('../models/home')

exports.getIndex = (req,res,next)=> {  
    const registeredHomes = Home.fetchAll(registeredHomes => 
        res.render('user/index', {
            registeredHomes : registeredHomes , pageTitle : 'airbnb home', currentPage: 'index'
        } )
    ) 
}

exports.getHome = (req,res,next)=> {  
    const registeredHomes = Home.fetchAll(registeredHomes => 
        res.render('user/home-list', {
            registeredHomes : registeredHomes , pageTitle : 'airbnb home', currentPage: 'home'
        } )
    ) 
}

exports.getBookings = (req,res,next)=> {  
    res.render('user/bookings', {
    pageTitle : 'My Bookings',currentPage: 'Bookings'
    })
}

exports.getFavouriteList = (req,res,next)=> {  
    const registeredHomes = Home.fetchAll(registeredHomes => 
        res.render('user/favourite-list', {
            registeredHomes : registeredHomes , pageTitle : 'My Favourites', currentPage: 'Favourites'
        } )
    )
}

