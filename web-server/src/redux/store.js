// Redux: State management tool
import { configureStore } from '@reduxjs/toolkit'

import { modeReducer } from './features/mode/modeSlice'
import { signInSignUpReducer } from './features/signInSignUp/signInSignUp'
import { authReducer } from './features/auth/authSlice'
import { pageTitleReducer } from './features/pageTitle/pageTitleSlice'
import { sidebarReducer } from './features/sidebar/sidebarSlice'

export default configureStore({
  reducer: {
    mode: modeReducer,
    signInSignUp: signInSignUpReducer,
    auth: authReducer,
    pageTitle: pageTitleReducer,
    sidebar: sidebarReducer
  }
})
