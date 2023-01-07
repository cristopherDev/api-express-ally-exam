const { Router } = require('express')
const router = Router()
const { getTime } = require('./timezone.controller')
const protect = require('../middlewares/protect.middleware')

router.get('/', protect, getTime)

module.exports = router
