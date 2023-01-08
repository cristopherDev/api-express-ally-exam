const UsersService = require('../users/users.service')
const User = require('../users/models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { secretKey } = require('../constants')

const usersService = new UsersService(User, '')

async function authUser(req, res) {
  const { email, password } = req.body

  const findUser = await usersService.findEmail(email)

  if (!findUser) {
    return res.status(500).json({ message: 'El usuario no existe' })
  }

  const check = bcrypt.compareSync(password, findUser.password)

  if (!check) {
    return res.status(401).json({ message: 'El password es incorrecto' })
  }

  await usersService.updateLoginUser(findUser.id)

  const token = jwt.sign({ id: findUser.id }, secretKey, { expiresIn: '1d' })

  return res.status(200).json({ auth: true, id: findUser.id, token })
}

module.exports = {
  authUser,
}
