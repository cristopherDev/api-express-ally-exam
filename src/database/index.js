require('dotenv').config()
const { Sequelize } = require('sequelize')
const { dbUser, dbPassword, dbHost, dbPort, dbName } = require('../constants')

const db = {}

const config = {
  logging: false,
}

const urlConnection = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`

const sequelize = new Sequelize(urlConnection, config)

db.sequelize = sequelize

module.exports = db
