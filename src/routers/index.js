const { Router } = require('express')
const router = Router()
const usersRouters = require('../users/users.router')
const authRouters = require('../auth/auth.router')
const tasksRouters = require('../tasks/tasks.router')
const timezoneRouters = require('../timezones/timezone.router')
const weatherRouters = require('../weather/weather.router')

router.use('/users', usersRouters)
router.use('/auth', authRouters)
router.use('/tasks', tasksRouters)
router.use('/timezone', timezoneRouters)
router.use('/weather', weatherRouters)

module.exports = router
