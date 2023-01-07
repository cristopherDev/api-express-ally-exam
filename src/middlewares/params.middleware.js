const { JoiConfig } = require('../constants')

const validateParams = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.params, JoiConfig)

    if (error) {
      const { details } = error
      const message = details.map((i) => i.message).join(',')

      return res.status(500).json({ message })
    }

    next()
  }
}

module.exports = validateParams
