import * as TasksRepository from "../repositories/tasks";

export const getTasks = async (req, res) => {
  try {
    const tasks = await TasksRepository.get(req);
    const response = await res.json({ Task: tasks });
    return res.status(200).json(response);
  } catch (err) {
    res.status(412).json({ msg: err.message });
  }
};

export const createTask = async (req, res) => {
  try {
    req.body.userId = req.user.id;
    const data = req.body;
    const tasks = await TasksRepository.create(data);
    const response = await res.json(tasks);
    return response;
  } catch (err) {
    res.status(412).json({ msg: err.message });
  }
};

export const findTask = async (req, res) => {
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

export const putTask = async (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    await TasksRepository.put(body, params);
    return res.sendStatus(204);
  } catch (err) {
    res.status(412).json({ msg: err.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const params = req.params.id;
    const user = req.user.id;
    await TasksRepository.destroy(params, user);
    return res.sendStatus(204);
  } catch (err) {
    res.status(412).json({ msg: err.message });
  }
};
