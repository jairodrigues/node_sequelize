module.exports = function(app) {
  const TasksController = app.controllers.tasks;
  app
    .route("/tasks")
    .all(app.auth.authenticate())
    .get(TasksController.getTasks)
    .post(TasksController.createTask);
  app
    .route("/task/:id")
    .all(app.auth.authenticate())
    .get(TasksController.findTask)
    .put(TasksController.putTask)
    .delete(TasksController.deleteTask);
};
