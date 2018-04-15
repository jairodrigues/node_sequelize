import Patners from '../controllers/patners'

module.exports = app => {
    app.get("/patners", Patners.getPatners)
 }


