import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: 'Dashboard',
  subtitle: 'Welcome to your Dashboard'
}

const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload.title
      state.subtitle = action.payload.subtitle
    }
  }
})

export const { setTitle } = titleSlice.actions

export const titleReducer = titleSlice.reducer
