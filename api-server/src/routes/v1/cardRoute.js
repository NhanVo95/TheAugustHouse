import express from 'express'
import { StatusCodes } from 'http-status-codes'

import { cardValidation } from '~/validations/cardValidation'
import { cardController } from '~/controllers/cardController'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'Note: API get list cards' })
  })
  .post(cardValidation.createNew, cardController.createNew)

export const cardRoute = Router
