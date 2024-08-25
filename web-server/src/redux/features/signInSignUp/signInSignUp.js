import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selected: false
}

const signInSignUpSlice = createSlice({
  name: 'signInSignUp',
  initialState,
  reducers: {
    setSignInSignUp: (state, action) => {
      state.selected = action.payload
    }
  }
})

export const { setSignInSignUp } = signInSignUpSlice.actions

export const signInSignUpReducer = signInSignUpSlice.reducer
