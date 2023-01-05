const UserService = require('../services/user.service')
const User = require('../models/user.model')

const userService = new UserService(User)

async function createUser(req, res) {
  try {
    const user = req.body
    const result = await userService.createUser(user)

    if (result.error) {
        res.status(409).json(result.message)
    } else {
        res.status(200).json(result)
    }
  } catch (error) {
    res.status(500).json(error.message)
    //res.send(Boom.conflict('', { error }))
  }
}

module.exports = {
  createUser,
}
