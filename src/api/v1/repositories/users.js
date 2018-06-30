import * as db from '../../../config/db';
import ErrorHelper from '../../../helpers/errors';

export const get = async () => {
  await db.User.findAll({});
};

export const create = async data => {
  try {
    return await db.User.create(data);
  } catch (err) {
    ErrorHelper(err);
    throw err;
  }
};

export const find = async data => {
  try {
    return await db.User.findOne({ where: data });
  } catch (err) {
    throw err;
  }
};

export const put = async (body, data) => {
  try {
    return await db.User.update(body, { where: data });
  } catch (err) {
    ErrorHelper(err);
    throw err;
  }
};

export const destroy = async data => {
  try {
    return await db.User.destroy({ where: data });
  } catch (err) {
    throw err;
  }
};
