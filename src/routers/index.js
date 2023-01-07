const { Router } = require('express')
const router = Router()
const usersRouters = require('./users.router')
const authRouters = require('./auth.router')
const tasksRouters = require('./tasks.router')
const timezoneRouters = require('./timezone.router')
const weatherRouters = require('./weather.router')

router.use('/users', usersRouters)
router.use('/auth', authRouters)
router.use('/tasks', tasksRouters)
router.use('/timezone', timezoneRouters)
router.use('/weather', weatherRouters)

module.exports = router
