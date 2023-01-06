const { JoiConfig } = require('../constants')

const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, JoiConfig)

    if (error) {
      const { details } = error
      const message = details.map((i) => i.message).join(',')

      return res.status(409).json({ message })
    }

    next()
  }
}

module.exports = validateBody
