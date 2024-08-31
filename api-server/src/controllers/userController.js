import { log } from '~/utilities/logger'

import { StatusCodes } from 'http-status-codes'
import { userService } from '~/services/userService'

const createNew = async (req, res, next) => {
  try {
    const createUser = await userService.createNew(req.body)

    if (createUser.created) {
      log('debug', 'Controller - The user successfully created: %o', createUser)

      res.status(StatusCodes.CREATED).json(createUser)
    } else {
      log(
        'debug',
        `Controller - The user was unsuccessful in creating because ${createUser.message}`
      )
      res.status(StatusCodes.UNPROCESSABLE_ENTITY).json(createUser)
    }
  } catch (error) {
    next(error)
  }
}

const authenticate = async (req, res, next) => {
  try {
    const user = await userService.authenticate(req)

    res.cookie('refreshToken', user.refreshToken, {
      httpOnly: true,
      sameSite: 'None',
      maxAge: 24 * 60 * 60 * 1000 //NOTE - 24 hours
    })
    res.send(user)
  } catch (error) {
    next(error)
  }
}

export const userController = { createNew, authenticate }
