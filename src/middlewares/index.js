import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import logger from '../config/logger.js';

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../config/swagger.json');

module.exports = app => {
  app.set('port', 3000);
  app.set('jsons paces', 4);
  app.use(
    morgan('common', {
      stream: {
        write: message => {
          logger.info(message);
        },
      },
    })
  );
  app.set('route-path-v1', '/api/v1');
  app.use(helmet());
  // app.use(
  //   cors({
  //     origin: ['http://localhost:3001'],
  //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //     allowedHeaders: ['Content-Type', 'Authorization'],
  //   })
  // );
  app.use(compression());
  app.use(bodyParser.json());
  app.use(app.middlewares.auth.initialize());
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.route('/healthCheck').get((req, res) => {
    res.status(200).json({ message: 'server is running...' });
  });
  app.use((req, res, next) => {
    delete req.body.id;
    next();
  });
};
