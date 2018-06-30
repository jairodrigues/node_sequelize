import * as db from '../../../config/db';

export const get = async req => {
  await db.Tasks.findAll({ where: { userId: req.user.id } });
};

export const create = async data => {
  await db.Tasks.create(data);
};

export const find = async (data, id) => {
  await db.Tasks.findOne({ where: { id: data, userId: id } });
};

export const put = async (body, data) => {
  await db.Tasks.update(body, { where: data });
};

export const destroy = async (data, id) => {
  await db.Tasks.destroy({ where: { id: data, userId: id } });
};
