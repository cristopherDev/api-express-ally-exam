const { Router } = require('express')
const router = Router()
const { getWeather } = require('../controllers/weather.controller')
const protect = require('../middlewares/protect.middleware')

router.get('/', protect, getWeather)

module.exports = router
