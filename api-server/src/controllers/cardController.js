import { log } from '~/utilities/logger'
import { StatusCodes } from 'http-status-codes'
import { cardService } from '~/services/cardService'

const createNew = async (req, res, next) => {
  try {
    log('debug', 'create new card: %o', req.body)

    const createCard = await cardService.createNew(req.body)

    res.status(StatusCodes.CREATED).json(createCard)
  } catch (error) {
    next(error)
  }
}

export const cardController = { createNew }
