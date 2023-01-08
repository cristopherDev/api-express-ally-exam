const { Router } = require('express')
const router = Router()
const validateBody = require('../middlewares/validation.middleware')
const validateParams = require('../middlewares/params.middleware')
const taskSchema = require('../schemas/tasks.schema')
const doneTaskSchema = require('../schemas/done-task.schema')
const userTasksSchema = require('../schemas/user-tasks.schema')
const tasksController = require('./tasks.controller')
const protect = require('../middlewares/protect.middleware')

router.post('/', protect, validateBody(taskSchema), tasksController.createTask)
router.patch(
  '/:id',
  protect,
  validateParams(userTasksSchema),
  validateBody(doneTaskSchema),
  tasksController.doneTask
)

module.exports = router
