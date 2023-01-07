const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')
const Task = require('../../tasks/models/task.model')
const bcrypt = require('bcrypt')

const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = bcrypt.genSaltSync()
          const hashedPassword = bcrypt.hashSync(user.password, salt)
          user.password = hashedPassword
        }
      },
    },
    timestamps: true,
    tableName: 'user',
    freezeTableName: true,
  }
)

User.hasOne(Task)

module.exports = User
