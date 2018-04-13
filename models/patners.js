'use strict';

module.exports = (sequelize, DataTypes) => {
  var Patners = sequelize.define('Patners', {
    name: DataTypes.STRING
  }, {});
  Patners.associate = function(models) {
    // associations can be defined here
  };
  return Patners;
};