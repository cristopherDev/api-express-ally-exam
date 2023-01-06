const { Router } = require('express')
const router = Router()
const { validateNewUser } = require('../middlewares/user.middleware')
const usersController = require('../controllers/users.controller')

router.get('/', usersController.getAllUsers)
router.post('/', validateNewUser, usersController.createUser)

module.exports = router
