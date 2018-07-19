const fs = require('fs');

require('dotenv').config();

const ENV = process.env.NODE_ENV;

function getSecret(secretPath) {
  try {
    return fs.readFileSync(secretPath, { encoding: "utf-8" }).trim();
  }
  catch (err) {
    console.error(`Error getting Secret on '${secretPath}'. ${err.message}`);
  }
}

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
      username: getSecret("/run/secrets/db-username"),
      password: getSecret("/run/secrets/db-username"),
      database: getSecret("/run/secrets/db-name"),
      host: getSecret("/run/secrets/db-host"),
      dialect: 'mssql',
      jwtSecret: 'Nta$k-AP1',
      jwtSession: { session: false },
    };
}

module.exports = config;
