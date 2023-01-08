class TasksService {
  constructor(task) {
    this.task = task
  }

  async createTask(taskData) {
    try {
      return await this.task.create(taskData)
    } catch (error) {
      return error
    }
  }

  async doneTask(id, status) {
    try {
      let taskUpdate = await this.task.findByPk(id)
      taskUpdate.done = status
      await taskUpdate.save()
      return { task: id, done: status }
    } catch (error) {
      return error
    }
  }
}

module.exports = TasksService
