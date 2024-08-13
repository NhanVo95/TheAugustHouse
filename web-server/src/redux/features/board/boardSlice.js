import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    updateBoardDetail(state, action) {
      state.value = action.payload
    }
  }
})

export const { updateBoardDetail } = boardSlice.actions

export const boardReducer = boardSlice.reducer
