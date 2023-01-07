const { Router } = require('express')
const router = Router()
const validateBody = require('../middlewares/validation.middleware')
const taskSchema = require('../schemas/tasks.schema')
const tasksController = require('./tasks.controller')
const protect = require('../middlewares/protect.middleware')

router.post('/', protect, validateBody(taskSchema), tasksController.createTask)

module.exports = router
