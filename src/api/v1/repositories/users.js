import * as db from '../../../config/db';
import ErrorHelper from '../../../helpers/errors';

export const get = async () => {
  try {
    return await db.User.findAll({});
  } catch (err) {
    throw err;
  }
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
    return await db.User.findOne({ where: { id: data } });
  } catch (err) {
    throw err;
  }
};

export const put = async (body, data) => {
  try {
    return await db.User.update(body, { where: { id: data } });
  } catch (err) {
    ErrorHelper(err);
    throw err;
  }
};

export const destroy = async data => {
  try {
    return await db.User.destroy({ where: { id: data } });
  } catch (err) {
    throw err;
  }
};
