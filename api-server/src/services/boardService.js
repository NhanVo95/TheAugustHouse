import { cloneDeep } from 'lodash'

import { slugify } from '~/utilities/slugify'

import { boardModel } from '~/models/boardModel'
import ApiError from '~/utilities/ApiError'
import { StatusCodes } from 'http-status-codes'

// import { log } from '~/utilities/logger'

const createNew = async (reqBody) => {
  try {
    //NOTE - Xu ly logic du lieu tuy dac thu du an
    const newBoard = { ...reqBody, slug: slugify(reqBody.title) }

    const createBoard = await boardModel.createNew(newBoard)

    const getNewBoard = await boardModel.findOneById(createBoard.insertedId)

    return getNewBoard
  } catch (error) {
    throw error
  }
}

const getDetails = async (boardId) => {
  try {
    const board = await boardModel.getDetails(boardId)

    if (!board) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found')
    }

    const resBoard = cloneDeep(board)

    resBoard.columns.forEach((column) => {
      column.cards = resBoard.cards.filter((card) => card.columnId.equals(column._id))
    })

    delete resBoard.cards

    // log('debug', 'Get Board Detail: %o', resBoard)

    return resBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew,
  getDetails
}
