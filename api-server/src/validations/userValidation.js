import Joi from 'joi'
import { log } from '~/utilities/logger'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utilities/ApiError'
import { PASSWORD_RULE } from '~/utilities/validators'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    name: Joi.string().required().min(2).max(50).trim().strict(),
    email: Joi.string().email().required().strict(),
    password: Joi.string().required().pattern(PASSWORD_RULE).strict().messages({
      'string.base': 'Password should be a type of "text"',
      'string.empty': 'Password cannot be an empty field',
      'any.required': 'Password is a required field',
      'string.pattern.base': 'Please create a stronger password.'
    }),
    role: Joi.string().valid('admin', 'staff', 'client').default('client')
  })

  try {
    await correctCondition.validateAsync(req.body, { abortEarly: false })

    log('debug', 'Validation - Validate to create new user: %o', req.body)

    next()
  } catch (error) {
    next(
      new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message)
    )
  }
}

const authenticate = async (req, res, next) => {
  const correctCondition = Joi.object({
    email: Joi.string()
      .email()
      .required()
      .strict()
      .error(new Error('Email or password incorrect')),
    password: Joi.string()
      .required()
      .pattern(PASSWORD_RULE)
      .strict()
      .error(new Error('Email or password incorrect'))
  })

  try {
    await correctCondition.validateAsync(req.body, { abortEarly: false })

    log('debug', 'Validation - Validate to authenticate user: %o', req.body)

    next()
  } catch (error) {
    next(
      new ApiError(
        StatusCodes.NON_AUTHORITATIVE_INFORMATION,
        new Error(error).message
      )
    )
  }
}

export const userValidation = { createNew, authenticate }
