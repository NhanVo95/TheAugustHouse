import Joi from 'joi'
import { log } from '~/utilities/logger'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utilities/ApiError'
import { env } from 'process'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utilities/validators'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().messages({
      'any.required': '{{#label}} is required',
      'string.empty': '{{#label}} is not allowed to be empty',
      'string.min': '{{#label}} lenght must be at least 3 characters long',
      'string.max': '{{#label}} lenght must be less than or equal to 50 characters long',
      'string.trim': '{{#label}} must not have leading or trailing whitespace'
    }),
    description: Joi.string().required().min(3).max(256).trim().strict(),
    type: Joi.string().valid(env.PUBLIC, env.PRIVATE).required()
  })

  try {
    log('debug', `Title: ${req.body.title} - Description: ${req.body.description} - Type: ${req.body.type}`)

    await correctCondition.validateAsync(req.body, { abortEarly: false })

    next()
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
  }
}

const update = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().min(3).max(50).trim().strict(),
    description: Joi.string().min(3).max(256).trim().strict(),
    type: Joi.string().valid(env.PUBLIC, env.PRIVATE),
    columnOrderIds: Joi.array().items(Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE))
  })

  try {
    log('debug', `Title: ${req.body.title} - Description: ${req.body.description} - Type: ${req.body.type}`)

    await correctCondition.validateAsync(req.body, { abortEarly: false, allowUnknown: true })

    next()
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
  }
}

export const boardValidation = { createNew, update }
