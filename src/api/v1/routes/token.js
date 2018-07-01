import gerarToken from '../../../helpers/token';

module.exports = app => {
  app.route('/auth').post(gerarToken);
};
