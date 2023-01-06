const Joi = require('joi')

const taskSchema = Joi.object({
  task: Joi.string().required(),
  userId: Joi.number().positive().required(),
})

module.exports = taskSchema
