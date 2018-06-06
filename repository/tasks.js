module.exports = function(app) {
  const Tasks = app.models.tasks;
  const db = app.models.index;

  this.get = async req => {
    return await db.Tasks.findAll({ where: { user_id: req.user.id } });
  };
  this.create = async data => {
    return await db.Tasks.create(data);
  };
  this.find = async (data, id) => {
    return await db.Tasks.findOne({ where: { id: data, user_id: id } });
  };
  this.put = async (body, data) => {
    return await db.Tasks.update(body, { where: data });
  };
  this.delete = async (data, id) => {
    return await db.Tasks.destroy({ where: { id: data, user_id: id } });
  };
  return this;
};
