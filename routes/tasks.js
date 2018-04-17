
module.exports = function(app) {
    const TasksController = app.controllers.tasks
    app.route("/tasks")
      .all()
      .get(TasksController.getTasks)
      .post(TasksController.createTask)
    app.route("/task/:id")
      .get(TasksController.findTask)
      .put(TasksController.putTask)
      .delete(TasksController.deleteTask)
 }
