import * as db from "../../../config/db";

export const get = async req => {
  return await db.Tasks.findAll({ where: { userId: req.user.id } });
};

export const create = async data => {
  return await db.Tasks.create(data);
};

export const find = async (data, id) => {
  return await db.Tasks.findOne({ where: { id: data, userId: id } });
};

export const put = async (body, data) => {
  return await db.Tasks.update(body, { where: data });
};
export const destroy = async (data, id) => {
  return await db.Tasks.destroy({ where: { id: data, userId: id } });
};
