const { Router } = require('express')
const router = Router()
const usersRouters = require('./users.router')
const authRouters = require('./auth.router')
const tasksRouters = require('./tasks.router')
const timezoneRouts = require('./timezone.router')

router.use('/users', usersRouters)
router.use('/auth', authRouters)
router.use('/tasks', tasksRouters)
router.use('/timezone', timezoneRouts)

module.exports = router
