import { userModel } from '~/models/userModel'

const createNew = async (reqBody) => {
  try {
    //NOTE - Xu ly logic du lieu tuy dac thu du an
    const newUser = { ...reqBody }

    const createUser = await userModel.createNew(newUser)

    const getNewUser = await userModel.findOneById(createUser.insertedId)

    return getNewUser
  } catch (error) {
    throw error
  }
}

export const userService = {
  createNew
}
