
module.exports = function(app) {
    const PatnersController = app.controllers.patners
    const Patners = require("../models/patners")
    app.route("/patners")
      .all()
      .get(PatnersController.getPatners)
      .post(PatnersController.createPatners)
 }
