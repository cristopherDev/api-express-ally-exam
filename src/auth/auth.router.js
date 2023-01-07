const { Router } = require('express')
const router = Router()
const { authUser } = require('./auth.controller')

router.post('/', authUser)

module.exports = router
