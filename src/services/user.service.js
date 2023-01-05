function UserService(user) {
  this.user = user
}

UserService.prototype = {
  createUser: async function (userData) {
    try {
      const result = await this.user.create(userData)
      return result
    } catch (error) {
      const typeError = 'SequelizeUniqueConstraintError'
      if (error.name === typeError) {
        const { path } = error.errors[0]
        if (path === 'email') return { error: true, message: 'Email already exists' }
      } else {
        return error
      }
    }
  },
}

module.exports = UserService
