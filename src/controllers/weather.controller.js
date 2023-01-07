const WeatherService = require('../services/weather.service')
const { urlApiWeather, apiWeatherKey } = require('../constants')

const weatherService = new WeatherService(urlApiWeather, apiWeatherKey)

async function getWeather(req, res) {
  try {
    const { country } = req.query
    const result = await weatherService.getWeather(country)

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  getWeather,
}
