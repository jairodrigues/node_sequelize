import Patners from '../models/patners'
import db from '../models/index'

async function get() {
    return await db.Patners.findAll({})      
}

module.exports = {
    get
}

