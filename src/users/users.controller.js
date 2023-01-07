const UsersService = require('./users.service')
const User = require('./models/user.model')
const Task = require('../tasks/models/task.model')

const usersService = new UsersService(User, Task)

async function createUser(req, res) {
  try {
    const user = req.body
    const result = await usersService.createUser(user)

    if (result.message) {
      const { message } = result
      return res.status(409).json({ message })
    }

    return res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function getAllUsers(req, res) {
  try {
    const offset = req.query.page || 0
    const limit = req.query.limit || 5

    const result = await usersService.getAllUsers(offset, limit)

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function getAllTaskByIdUser(req, res) {
  try {
    const { id } = req.params
    const result = await usersService.getAllTaskByIdUser(id)

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getAllTaskByIdUser,
}
