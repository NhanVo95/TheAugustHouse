import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selected: 'Dashboard',
  collapsed: false
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload?.selected
    },
    setCollapsed: (state, action) => {
      state.collapsed = action.payload?.collapsed
    }
  }
})

export const { setSelected, setCollapsed } = sidebarSlice.actions

export const sidebarReducer = sidebarSlice.reducer
