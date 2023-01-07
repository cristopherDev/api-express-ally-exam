const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Task = sequelize.define(
  'task',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: 'task',
    freezeTableName: true,
  }
)

module.exports = Task
