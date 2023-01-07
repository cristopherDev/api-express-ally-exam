const moment = require('moment-timezone')
const TimeZoneService = require('../services/timezone.service')

const timeZoneService = new TimeZoneService(moment)

async function getTime(req, res) {
  const { zone } = req.query

  if (zone) {
    const time = timeZoneService.getTimeZone(zone)

    return res.status(200).json({ timezone: zone, time })
  }

  return res.status(400).json({ message: 'No se especifico zona horaria' })
}

module.exports = {
  getTime,
}
