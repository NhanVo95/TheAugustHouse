import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  role: 'client',
  accessToken: '',
  refreshToken: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.role = action.payload.role
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    }
  }
})

export const { setAuth } = authSlice.actions

export const authReducer = authSlice.reducer
