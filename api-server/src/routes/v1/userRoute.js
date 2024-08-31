import express from 'express'
import passport from 'passport'
import { StatusCodes } from 'http-status-codes'

import { userValidation } from '~/validations/userValidation'
import { userController } from '~/controllers/userController'

const Router = express.Router()

Router.route('/').get((req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ message: 'APIs_V1: User are ready to use.' })
})

Router.route('/signup').post(userValidation.createNew, userController.createNew)

Router.route('/signin').post(
  userValidation.authenticate,
  passport.authenticate('local'),
  userController.authenticate
)

export const userRoute = Router
