import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'light'
}

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeMode: (state, action) => {
      state.mode = action.payload
    },
    toggleMode: (state) => {
      switch (state.mode) {
        case 'light':
          state.mode = 'dark'
          break

        default:
          state.mode = 'light'
          break
      }
    }
  }
})

export const { changeMode, toggleMode } = modeSlice.actions

export const modeReducer = modeSlice.reducer
