const Joi = require('joi')

const emailDomains = ['com', 'mx', 'io', 'net']

const authSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: emailDomains },
    })
    .required(),
  password: Joi.string().required(),
})

module.exports = authSchema
