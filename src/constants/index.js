require('dotenv').config()

const dbUser = process.env.DB_USER || ''
const dbPassword = process.env.DB_PASSWORD || ''
const dbHost = process.env.DB_HOST || ''
const dbPort = Number(process.env.DB_PORT) || 5432
const dbName = process.env.DB_NAME || ''
const PORT = Number(process.env.PORT) || 3000
const secretKey =
  process.env.SECRET_KEY || '402586e2faa8da4c98a35f1b20d6b033c60'
const urlApiWeather = 'http://api.weatherapi.com/v1/current.json'
const apiWeatherKey = process.env.API_KEY || ''
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
  secretKey,
  urlApiWeather,
  apiWeatherKey,
  JoiConfig,
}
