import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: 'Dashboard'
}

const pageTitleSlice = createSlice({
  name: 'pageTitle',
  initialState,
  reducers: {
    setPageTitle: (state, action) => {
      state.title = action.payload.title
    }
  }
})

export const { setPageTitle } = pageTitleSlice.actions

export const pageTitleReducer = pageTitleSlice.reducer
