class WeatherService {
  constructor(url, key) {
    this.url = url
    this.key = key
  }

  async getWeather(country) {
    try {
      const fomatUrl = `${this.url}?key=${this.key}&q=${country}&aqi=no`
      const response = await fetch(fomatUrl)
      const weather = await response.json()

      return weather
    } catch (error) {}
  }
}

module.exports = WeatherService
