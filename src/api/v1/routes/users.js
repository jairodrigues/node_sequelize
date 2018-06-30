import * as UserController from '../controllers/users';

module.exports = app => {
  app
    .route('/users')
    .all()
    .get(UserController.getUsers)
    .post(UserController.createUser);
  app
    .route('/user/:id')
    .get(UserController.findUser)
    .put(UserController.putUser)
    .delete(UserController.deleteUser);
};
