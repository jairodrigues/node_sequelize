import * as UsersRepository from '../repositories/users';

const HTTPStatus = require('http-status');
const { onSuccess, onError } = require('../handlers/index');

export const getUsers = async (req, res) => {
  try {
    const response = await UsersRepository.get();
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
    const User = await UsersRepository.create(data);
    const response = { message: `Usuário ${User.name} Criado com sucesso` };
    onSuccess(response, HTTPStatus.OK, req, res);
  } catch (err) {
    const message = err.message || 'Não foi possível criar um novo Usuário';
    if(message == 'Não foi possível criar um novo Usuário')
      onError(message, HTTPStatus.INTERNAL_SERVER_ERROR, req, res);
    else{
      onError(message, HTTPStatus.PRECONDITION_FAILED, req, res);
    }
  }
};

export const findUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UsersRepository.find(id);
    if (user) {
      onSuccess(user, HTTPStatus.OK, req, res);
    } else {
      throw new Error();
    }
  } catch (err) {
    const message =
      err.message || 'Não foi possível buscar o Usuário solicitado';
    onError(message, HTTPStatus.INSUFFICIENT_STORAGE, req, res);
  }
};

export const putUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const user = await UsersRepository.put(body, id);
    if (user > 0) {
      const response = {
        message: `Dados do usuário alterados com sucesso`,
      };
      onSuccess(response, HTTPStatus.OK, req, res);
    } else {
      throw new Error('Usuário não encontrado');
    }
  } catch (err) {
    const message =
      err.message || 'Não foi possível alterar o Usuário solicitado';
    onError(message, HTTPStatus.INTERNAL_SERVER_ERROR, req, res);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UsersRepository.destroy(id);
    if (user > 0) {
      const response = {
        message: 'Usúario excluido com sucesso',
      };
      onSuccess(response, HTTPStatus.OK, req, res);
    } else {
      throw new Error('Usuário não encontrado');
    }
  } catch (err) {
    const message =
      err.message || 'Não foi possível deletar o Usuário solicitado';
    res.status(412).json({ error: message });
  }
};
