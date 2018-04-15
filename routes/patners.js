module.exports = function(app) {   
    const PatnersController = app.controllers.patners
    app.get("/patners", PatnersController.getPatners)
 }


