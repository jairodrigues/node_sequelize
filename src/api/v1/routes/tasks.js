import * as TasksController from '../controllers/tasks';

module.exports = app => {
  app
    .route('/tasks')
    .all(app.middlewares.auth.authenticate())
    .get(TasksController.getTasks)
    .post(TasksController.createTask);
  app
    .route('/task/:id')
    .all(app.middlewares.auth.authenticate())
    .get(TasksController.findTask)
    .put(TasksController.putTask)
    .delete(TasksController.deleteTask);
};
