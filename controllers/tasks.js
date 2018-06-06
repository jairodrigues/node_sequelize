module.exports = function(app) {
  const TasksRepository = app.repository.tasks;

  this.getTasks = async (req, res) => {
    try {
      const tasks = await TasksRepository.get(req);
      const response = await res.json({ Task: tasks });
      return res.status(200).response;
    } catch (err) {
      res.status(412).json({ msg: err.message });
    }
  };

  this.createTask = async (req, res) => {
    try {
      req.body.user_id = req.user.id;
      const data = req.body;
      const tasks = await TasksRepository.create(data);
      const response = await res.json(tasks);
      return response;
    } catch (err) {
      res.status(412).json({ msg: err.message });
    }
  };

  this.findTask = async (req, res) => {
    try {
      const params = req.params.id;
      const user = req.user.id;
      const task = await TasksRepository.find(params, user);
      if (task) {
        res.json(task);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      res.status(412).json({ msg: err.message });
    }
  };

  this.putTask = async (req, res) => {
    try {
      const params = req.params;
      const body = req.body;
      await TasksRepository.put(body, params);
      return res.sendStatus(204);
    } catch (err) {
      res.status(412).json({ msg: err.message });
    }
  };

  this.deleteTask = async (req, res) => {
    try {
      const params = req.params.id;
      const user = req.user.id;
      await TasksRepository.delete(params, user);
      return res.sendStatus(204);
    } catch (err) {
      res.status(412).json({ msg: err.message });
    }
  };

  return this;
};
