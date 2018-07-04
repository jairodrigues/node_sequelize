const ENV = process.env.NODE_ENV;

let config = null;

switch (ENV) {
  case 'development':
    config = {
      username: 'root',
      password: 'root',
      database: 'development',
      host: 'localhost',
      dialect: 'mysql',
      jwtSecret: 'Nta$k-AP1',
      jwtSession: { session: false },
    };
    break;
  case 'test':
    config = {
      username: 'root',
      password: 'root',
      database: 'test',
      host: 'localhost',
      dialect: 'mysql',
      jwtSecret: 'Nta$k-AP1',
      jwtSession: { session: false },
    };
    break;
  default:
    config = {
      username: 'root',
      password: 'root',
      database: 'test',
      host: '127.0.0.1',
      dialect: 'mysql',
      jwtSecret: 'Nta$k-AP1',
      jwtSession: { session: false },
    };
}

module.exports = config;
