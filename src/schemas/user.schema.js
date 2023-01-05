const Joi = require('joi')

const regPassword = new RegExp('^[a-zA-Z0-9]{3,30}$')
const emailDomains = ['com', 'mx', 'io', 'net']

const userSchema = Joi.object({
  name: Joi.string().min(3).max(90).required(),
  password: Joi.string().pattern(regPassword).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: emailDomains },
  }).required(),
})

module.exports = userSchema
