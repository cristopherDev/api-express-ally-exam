const { Router } = require('express')
const router = Router()
const userRouters = require('./users.router')
const loginRouters = require('./login.router')

router.use('/users', userRouters)
router.use('/login', loginRouters)

module.exports = router
