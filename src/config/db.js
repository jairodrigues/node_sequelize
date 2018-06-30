const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const config = require('./index.js');

const basename = path.basename(module.filename);

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    dialect: config.dialect,
    host: config.host,
    port: config.port || '',
  }
);

const db = {};
const dir = path.join(__dirname, '../db/models');
fs.readdirSync(dir)
  .filter(
    file =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach(file => {
    const model = sequelize.import(path.join(dir, file));
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
