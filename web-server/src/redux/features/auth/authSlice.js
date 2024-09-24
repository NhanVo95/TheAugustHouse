import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: localStorage.getItem('name'),
  email: localStorage.getItem('email'),
  role: localStorage.getItem('role'),
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken')
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

      localStorage.setItem('name', action.payload.name)
      localStorage.setItem('email', action.payload.email)
      localStorage.setItem('role', action.payload.role)
      localStorage.setItem('accessToken', action.payload.accessToken)
      localStorage.setItem('refreshToken', action.payload.refreshToken)
    },
    setToken: (state, action) => {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken

      localStorage.setItem('accessToken', action.payload.accessToken)
      localStorage.setItem('refreshToken', action.payload.refreshToken)
    }
  }
})

export const { setAuth, setToken } = authSlice.actions

export const authReducer = authSlice.reducer
