const Patners = require('../repository/patners')

module.exports = app => {
    app.get("/patners", Patners.findAll)
}


