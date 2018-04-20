
module.exports = function(app) {
    const UsersController = app.controllers.users
    app.route("/users")
      .all()
      .get(UsersController.getUsers)
      .post(UsersController.createUser)
    app.route("/user/:id")
      .get(UsersController.findUser)
      .put(UsersController.putUser)
      .delete(UsersController.deleteUser)
 }