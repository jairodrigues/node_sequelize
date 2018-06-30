import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      hooks: {
        beforeCreate: user => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        },
      },
    }
  );
  User.isPassword = (encodedPassword, password) => {
    bcrypt.compareSync(password, encodedPassword);
  };

  return User;
};
