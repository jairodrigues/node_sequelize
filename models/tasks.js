'use strict';

module.exports = (sequelize, DataTypes) => {
  var Tasks = sequelize.define('Tasks', {
    title:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },
    done:	{
      type:	DataTypes.BOOLEAN,
      allowNull:	false,
      defaultValue:	false
    }
  }, {});
  Tasks.associate = function(models) {
    // associations can be defined here
  };
  return Tasks;
};
