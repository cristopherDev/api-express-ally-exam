const { Router } = require('express')
const router = Router()
const validateBody = require('../middlewares/validation.middleware')
const validateParams = require('../middlewares/params.middleware')
const protect = require('../middlewares/protect.middleware')
const userSchema = require('../schemas/user.schema')
const userTaskSchema = require('../schemas/user-tasks.schema')
const usersController = require('../controllers/users.controller')

router.get('/', protect, usersController.getAllUsers)
router.get(
  '/:id/tasks',
  protect,
  validateParams(userTaskSchema),
  usersController.getAllTaskByIdUser
)
router.post('/', validateBody(userSchema), usersController.createUser)

module.exports = router
