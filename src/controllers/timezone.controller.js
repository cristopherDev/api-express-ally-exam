const moment = require('moment-timezone')

async function getTime(req, res) {
  if (req.query.zone) {
    const date = new Date().toLocaleString()
    const formatDate = 'D/M/YYYY, HH:mm:ss'
    const timeZone = req.query.zone
    const formatReturn = 'D/M/YYYY, h:mm:ssA z'
    const now = moment(date, formatDate).tz(timeZone).format(formatReturn)

    return res.status(200).json({ timezone: timeZone, time: now })
  }

  return res.status(400).json({ message: 'No se especifico zona horaria' })
}

module.exports = {
  getTime,
}
