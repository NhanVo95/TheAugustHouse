import env from '~/utilities/env'
import axios from 'axios'

import { mockDataPerfume } from './mockData'

const API_ROOT = env.API_ROOT

//SECTION - Products
export const fetchProductsDetailsAPI = async () => {
  return mockDataPerfume
}
//!SECTION - Products

//SECTION - Boards
export const fetchBoardDetailsAPI = async (boardId) => {
  const respone = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)

  return respone.data
}

export const updateBoardDetailsAPI = async (boardId, updateData) => {
  const respone = await axios.put(`${API_ROOT}/v1/boards/${boardId}`, updateData)

  return respone.data
}
//!SECTION - Boards

//SECTION - Columns
export const createNewColumnAPI = async (newColumnData) => {
  const respone = await axios.post(`${API_ROOT}/v1/columns`, newColumnData)

  return respone.data
}
//!SECTION - Columns

//SECTION - Cards
export const createNewCardAPI = async (newCardData) => {
  const respone = await axios.post(`${API_ROOT}/v1/cards`, newCardData)

  return respone.data
}
//!SECTION - Cards
