import { userModel } from '~/models/userModel'

import { omit } from 'lodash'

const createNew = async (reqBody) => {
  try {
    //NOTE - Xu ly logic du lieu tuy dac thu du an
    const newUser = { ...reqBody }

    const createUser = await userModel.createNew(newUser)

    if (createUser.created) {
      const getNewUser = await userModel.findOneById(createUser.insertedId)

      return { ...getNewUser, created: createUser.created }
    } else {
      return createUser
    }
  } catch (error) {
    throw error
  }
}

const authenticate = async (reqBody) => {
  try {
    return omit(reqBody.user, ['password', '_destroy'])
  } catch (error) {
    throw error
  }
}

export const userService = {
  createNew,
  authenticate
}
