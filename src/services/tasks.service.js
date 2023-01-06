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
}

module.exports = TasksService
