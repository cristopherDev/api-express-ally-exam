const { Router } = require('express')
const router = Router()
const validateBody = require('../middlewares/validation.middleware')
const taskSchema = require('../schemas/tasks.schema')
const tasksController = require('../controllers/tasks.controller')

router.post('/', validateBody(taskSchema), tasksController.createTask)

module.exports = router
