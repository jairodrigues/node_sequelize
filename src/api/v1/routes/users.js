import * as UserController from '../controllers/users';

module.exports = app => {
  app
    .route(`${app.get('route-path-v1')}/users`)
    .all(app.middlewares.auth.authenticate())
    .get(UserController.getUsers)
    .post(UserController.createUser);
  app
    .route(`${app.get('route-path-v1')}/user/:id`)
    .all(app.middlewares.auth.authenticate())
    .get(UserController.findUser)
    .put(UserController.putUser)
    .delete(UserController.deleteUser);
};
