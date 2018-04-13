const db = require('../models/index.js')
const Patners = require('../models/patners')

async function findAll(req,res) {  
    db.Patners.findAll({})
        .then( patners => {
            res.json({patners: patners})
        })    
}

module.exports = {
    findAll:findAll
}