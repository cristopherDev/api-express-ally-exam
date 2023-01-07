const TasksService = require('./tasks.service')
const Task = require('./models/task.model')

const tasksService = new TasksService(Task)

async function createTask(req, res) {
  try {
    const task = req.body
    const result = await tasksService.createTask(task)

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
    createTask
}
