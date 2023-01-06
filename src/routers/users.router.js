const { Router } = require('express')
const router = Router()
const validateBody = require('../middlewares/validation.middleware')
const userSchema = require('../schemas/user.schema')
const usersController = require('../controllers/users.controller')

router.get('/', usersController.getAllUsers)
router.post('/', validateBody(userSchema), usersController.createUser)

module.exports = router
