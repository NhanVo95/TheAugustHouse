import express from 'express'

import { StatusCodes } from 'http-status-codes'

const Router = express.Router()

import { userRoute } from './userRoute'

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'APIs V1 are ready to use.' })
})

Router.use('/user', userRoute)

export const APIs_V1 = Router
