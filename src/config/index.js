"use strict";

const ENV = process.env.NODE_ENV || "development";

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
      username: "root",
      password: "root",
      database: "test",
      host: "127.0.0.1",
      dialect: "mysql",
      jwtSecret: "Nta$k-AP1",
      jwtSession: { session: false }
    };
    break;
}

module.exports = config;
