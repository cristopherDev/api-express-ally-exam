const { Router } = require('express')
const router = Router()
const usersRouters = require('./users.router')
const authRouters = require('./auth.router')
const tasksRouters = require('./tasks.router')

router.use('/users', usersRouters)
router.use('/auth', authRouters)
router.use('/tasks', tasksRouters)

module.exports = router
