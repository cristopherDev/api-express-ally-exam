const Joi = require('joi')

const userTasksSchema = Joi.object({
  id: Joi.number().positive().required(),
})

module.exports = userTasksSchema
