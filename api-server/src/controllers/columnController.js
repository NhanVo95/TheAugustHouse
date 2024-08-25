import { log } from '~/utilities/logger'
import { StatusCodes } from 'http-status-codes'
import { columnService } from '~/services/columnService'

const createNew = async (req, res, next) => {
  try {
    log('debug', 'create new column: %o', req.params)

    const createColumn = await columnService.createNew(req.body)

    res.status(StatusCodes.CREATED).json(createColumn)
  } catch (error) {
    next(error)
  }
}

export const columnController = { createNew }
