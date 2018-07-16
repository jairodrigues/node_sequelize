import gerarToken from '../../../helpers/token';

module.exports = app => {
  app.route(`${app.get('route-path-v1')}/auth`).post(gerarToken);
};
