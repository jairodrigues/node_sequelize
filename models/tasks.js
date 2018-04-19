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
    Tasks.belongsTo(models.Users, { targetKey: 'id', foreignKey: 'userId'})
  };
  return Tasks;
};
