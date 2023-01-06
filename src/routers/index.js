const { Router } = require('express')
const router = Router()
const usersRouters = require('./users.router')
const loginRouters = require('./login.router')
const tasksRouters = require('./tasks.router')

router.use('/users', usersRouters)
router.use('/login', loginRouters)
router.use('/tasks', tasksRouters)

module.exports = router
