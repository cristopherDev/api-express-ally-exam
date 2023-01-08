class TimeZoneService {
  constructor(moment) {
    this.moment = moment
  }

  getTimeZone(timeZone) {
    const date = new Date().toLocaleString()
    const formatDate = 'D/M/YYYY, HH:mm:ss'
    const formatReturn = 'D/M/YYYY, h:mm:ss A'
    const time = this.moment(date, formatDate).tz(timeZone).format(formatReturn)

    return time
  }
}

module.exports = TimeZoneService
