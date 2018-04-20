'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name:	{
      type:	DataTypes.STRING,
      allowNull:	false,
      validate:	{
          notEmpty:	true
      }
  },
  password:	{
      type:	DataTypes.STRING,
      allowNull:	false,
      validate:	{
          notEmpty:	true
      }
  },
  email:	{
      type:	DataTypes.STRING,
      unique:	true,
      allowNull:	false,
      validate:	{
          notEmpty:	true
      }
  }
},{});
  // User.associate = function(models){
  //   User.belongsTo(models.Tasks)
  // }
  return User;
};
