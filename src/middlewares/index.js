import bodyParser from 'body-parser';
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../config/swagger.json');

module.exports = app => {
  app.set('port', 3003);
  app.set('jsons paces', 4);
  app.set('route-path-v1', '/api/v1');
  app.use(bodyParser.json());
  app.use(app.middlewares.auth.initialize());
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use((req, res, next) => {
    delete req.body.id;
    next();
  });
};
