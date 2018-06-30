module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define(
    'Tasks',
    {
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      done: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {}
  );
  Tasks.associate = models => {
    Tasks.belongsTo(models.Users);
  };

  return Tasks;
};
