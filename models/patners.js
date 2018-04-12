'use strict';
module.exports = (sequelize, DataTypes) => {
  var Patners = sequelize.define('Patners', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Patners.associate = function(models) {
    // associations can be defined here
  };
  return Patners;
};