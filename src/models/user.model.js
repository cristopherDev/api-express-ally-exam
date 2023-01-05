const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')
const md5 = require('md5')

const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
          const cryptPassword = md5(user.password)
          user.password = cryptPassword
        }
      },
    },
    timestamps: true,
  }
)

module.exports = User
