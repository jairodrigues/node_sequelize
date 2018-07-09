require('dotenv').config();

const ENV = process.env.NODE_ENV;

let config = null;

switch (ENV) {
  case 'development':
    config = {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      host: process.env.HOST,
      dialect: process.env.DIALECT,
      jwtSecret: process.env.JWTSECRET,
      jwtSession: { session: false },
    };
    break;
  case 'test':
    config = {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE_TEST,
      host: process.env.HOST,
      dialect: process.env.DIALECT,
      jwtSecret: process.env.JWTSECRET,
      jwtSession: { session: false },
    };
    break;
  default:
    config = {
      username: 'sa',
      password: 'Juninho99',
      database: 'development',
      host: 'localhost',
      dialect: 'mssql',
      jwtSecret: 'Nta$k-AP1',
      jwtSession: { session: false },
    };
}

module.exports = config;
