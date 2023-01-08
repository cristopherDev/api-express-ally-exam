const Joi = require('joi')

const doneTaskSchema = Joi.object({
  status: Joi.boolean().required(),
})

module.exports = doneTaskSchema
