import * as UsersRepository from '../repositories/users';

const HTTPStatus = require('http-status');
const { onSuccess, onError } = require('../handlers/index');

export const getUsers = async (req, res) => {
  try {
    const Users = await UsersRepository.get();
    const response = await res.json({ Users });
    onSuccess(response, HTTPStatus.OK, req, res);
  } catch (err) {
    const message =
      err.message || 'Não foi possível buscar todos os Usuários cadastrados';
    onError(message, HTTPStatus.INTERNAL_SERVER_ERROR, req, res);
  }
};

export const createUser = async (req, res) => {
  try {
    const data = req.body;
    const Users = await UsersRepository.create(data);
    const response = await res.json(Users);
    onSuccess(response, HTTPStatus.OK, req, res);
  } catch (err) {
    const message = err.message || 'Não foi possível criar um novo Usuário';
    onError(message, HTTPStatus.INTERNAL_SERVER_ERROR, req, res);
  }
};

export const findUser = async (req, res) => {
  try {
    const { params } = req.params;
    const user = await UsersRepository.find(params);
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    const message =
      err.message || 'Não foi possível buscar o Usuário solicitado';
    res.status(412).json({ error: message });
  }
};

export const putUser = async (req, res) => {
  try {
    const { params } = req.params;
    const { body } = req.body;
    await UsersRepository.put(body, params);
    res.sendStatus(204);
  } catch (err) {
    const message =
      err.message || 'Não foi possível alterar o Usuário solicitado';
    res.status(412).json({ error: message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { params } = req.params;
    await UsersRepository.destroy(params);
    res.sendStatus(204);
  } catch (err) {
    const message =
      err.message || 'Não foi possível deletar o Usuário solicitado';
    res.status(412).json({ error: message });
  }
};
