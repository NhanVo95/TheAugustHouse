import { cardModel } from '~/models/cardModel'
import { columnModel } from '~/models/columnModel'

const createNew = async (reqBody) => {
  try {
    //NOTE - Xu ly logic du lieu tuy dac thu du an
    const newCard = { ...reqBody }

    const createCard = await cardModel.createNew(newCard)

    const getNewCard = await cardModel.findOneById(createCard.insertedId)

    if (getNewCard) {
      await columnModel.pushCardOrderIds(getNewCard)
    }

    return getNewCard
  } catch (error) {
    throw error
  }
}

export const cardService = {
  createNew
}
