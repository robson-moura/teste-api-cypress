import Joi from '@hapi/joi'

const garantirValoresContract = Joi.array().items(
  Joi.string()
)

export default garantirValoresContract;