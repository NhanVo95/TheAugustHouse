import express from 'express'
import { StatusCodes } from 'http-status-codes'

import { userValidation } from '~/validations/userValidation'
import { userController } from '~/controllers/userController'

const Router = express.Router()

Router.route('/signup')
  .get((req, res) => {
    res
      .status(StatusCodes.OK)
      .json({ message: 'APIs_V1: User are ready to use.' })
  })
  .post(userValidation.createNew, userController.createNew)

export const userRoute = Router
