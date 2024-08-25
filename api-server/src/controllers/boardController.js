import { log } from '~/utilities/logger'
import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService'

const createNew = async (req, res, next) => {
  try {
    log('debug', 'create new board: %o', req.params)

    const createBoard = await boardService.createNew(req.body)

    res.status(StatusCodes.CREATED).json(createBoard)
  } catch (error) {
    next(error)
  }
}

const getDetails = async (req, res, next) => {
  try {
    const boardId = req.params.id
    log('debug', 'get detail board: %o', req.params)

    const board = await boardService.getDetails(boardId)

    res.status(StatusCodes.CREATED).json(board)
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const boardId = req.params.id
    log('debug', 'update board: %o', req.params)

    const board = await boardService.getDetails(boardId)

    res.status(StatusCodes.CREATED).json(board)
  } catch (error) {
    next(error)
  }
}

export const boardController = { createNew, getDetails, update }
