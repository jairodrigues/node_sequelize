'use strict';
import bcrypt from "bcrypt";
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        hooks: {
            beforeCreate: user => {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            }
        }
    }, {});
    // User.associate = function(models){
    //   User.belongsTo(models.Tasks)
    // }
    return User;
};
