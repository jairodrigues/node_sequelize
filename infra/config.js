"use strict";

const ENV = "development";
// const USERNAME = process.env.USERNAME;
// const PASSWORD = process.env.PASSWORD;
// const DATABASE = process.env.DATABASE;
// const HOST = process.env.HOST_DB;
// const PORT = process.env.PORT_DB;
// const DIALECT = process.env.DIALECT;

let config = null;

switch (ENV) {
  case "development":
    config = {
      username: "root",
      password: "root",
      database: "teste_development",
      host: "127.0.0.1",
      dialect: "mysql",
      jwtSecret: "Nta$k-AP1",
      jwtSession: { session: false }
    };
    break;
  case "test":
    config = {
      username: USERNAME,
      password: PASSWORD,
      database: DATABASE,
      host: HOST,
      port: PORT,
      dialect: DIALECT
    };
    break;
}

module.exports = config;
