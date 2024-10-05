import { createSlice } from '@reduxjs/toolkit'

let initialState: {
  mode: string
} = {
  mode: 'dark'
}

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setMode: (state, action) => {
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

export const { setMode, toggleMode } = modeSlice.actions

export const modeReducer = modeSlice.reducer
