const Boom = require('@hapi/boom')
const { JoiConfig } = require('../constants')

const userSchema = require('../schemas/user.schema')

function validateNewUser(req, res, next) {
  const { error } = userSchema.validate(req.body, JoiConfig)

  if (error) {
    const { details } = error
    const message = details.map((i) => i.message).join(',')

    res.send(Boom.badData('', { message }))
  }

  next()
}

module.exports = {
  validateNewUser,
}
