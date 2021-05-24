'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate (models) {}
  }
  Task.init(
    {
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      deadline: {
        type: DataTypes.DATE,
      },
      isDone: {
        field: 'is_done',
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Task',
      tableName: 'tasks',
      underscored: true,
    }
  );
  return Task;
};
