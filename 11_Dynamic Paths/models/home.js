// core module
const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/pathUtil')


module.exports = class Home {
    constructor(houseName, price, location, occupancy) {
        this.houseName = houseName
        this.price = price
        this.location = location
        this.occupancy = occupancy
    }

    save() {
        Home.fetchAll((registeredHomes) => {
            registeredHomes.push(this)
            const homeDataPath = path.join(rootDir,'data','data.json')
            fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
            console.log('File Writing Concluded',error);
        })
        })
        
    }

    static fetchAll(callback){
        const homeDataPath = path.join(rootDir,'data','data.json')
        fs.readFile(homeDataPath,(error,data) => {
            if(!error){
                callback(JSON.parse(data))  
            }else{
                callback([])
            }
        })
        
    }
}