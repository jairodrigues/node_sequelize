/*eslint-disable */

const error = err => {
  const errParam = err;
  if (errParam.name === 'SequelizeUniqueConstraintError') {
    errParam.message = 'Usuário já possui cadastro';
  }
  if (err.name == 'SequelizeValidationError') {
    const erro = [];
    err.errors.forEach(err => {
      erro.push(err.path);
    });

    const resp = (errParam.message = `Propriedade(s) contem algum erro de validação : { ${err.errors.map(item => item.path)} }`);
    return resp;
  }
};

export default error;
