require('dotenv').config()

const dbUser = process.env.DB_USER || ''
const dbPassword = process.env.DB_PASSWORD || ''
const dbHost = process.env.DB_HOST || ''
const dbPort = Number(process.env.DB_PORT) || 5432
const dbName = process.env.DB_NAME || ''
const PORT = Number(process.env.PORT) || 3000
const JoiConfig = {
  errors: {
    wrap: {
      label: '',
    },
  },
}

module.exports = {
  dbUser,
  dbPassword,
  dbHost,
  dbPort,
  dbName,
  PORT,
  JoiConfig,
}
