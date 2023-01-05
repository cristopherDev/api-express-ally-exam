const { Router } = require('express')
const router = Router()
const { validateNewUser } = require('../middlewares/user.middleware')
const { createUser } = require('../controllers/users.controller')

router.post('/', validateNewUser, createUser)

module.exports = router
