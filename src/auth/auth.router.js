const { Router } = require('express')
const router = Router()
const validateBody = require('../middlewares/validation.middleware')
const authSchema = require('../schemas/auth.schema')
const { authUser } = require('./auth.controller')

router.post('/', validateBody(authSchema), authUser)

module.exports = router
