const { fn } = require('sequelize')

class UsersService {
  constructor(user, task) {
    this.user = user
    this.task = task
  }

  async findEmail(email) {
    return await this.user.findOne({ where: { email } })
  }

  async createUser(userData) {
    try {
      const findResult = await this.findEmail(userData.email)

      if (!findResult) {
        return await this.user.create(userData)
      }

      throw new Error('User already exists.')
    } catch (error) {
      return error
    }
  }

  async getAllUsers(offset, limit) {
    try {
      const totalUsers = await this.user.count();

      const users = await this.user.findAll({
        attributes: ['id', 'name', 'email', 'last_login', 'createdAt'],
        order: [['id', 'DESC']],
        offset,
        limit,
      })

      return { total: totalUsers, users }
    } catch (error) {
      return error
    }
  }

  async getAllTaskByIdUser(userId) {
    try {
      return await this.task.findAll({
        where: { userId },
      })
    } catch (error) {
      return error
    }
  }

  async updateLoginUser(id) {
    try {
      const user = await this.user.findOne({ where: { id } })
      user.last_login = fn('NOW')
      user.save()

      return true
    } catch (error) {
      return error
    }
  }
}

module.exports = UsersService
