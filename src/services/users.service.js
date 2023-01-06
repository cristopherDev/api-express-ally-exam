class UsersService {
  constructor(user) {
    this.user = user
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
        order: [['id', 'DESC']],
        offset,
        limit,
      })

      return { total: totalUsers, users }
    } catch (error) {
      return error
    }
  }
}

module.exports = UsersService
