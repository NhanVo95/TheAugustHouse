// Redux: State management tool
import { configureStore } from '@reduxjs/toolkit'

import { modeReducer } from './features/mode/modeSlice'
import { signInSignUpReducer } from './features/signInSignUp/signInSignUp'

import { pageTitleReducer } from './features/pageTitle/pageTitleSlice'

export default configureStore({
  reducer: {
    mode: modeReducer,
    signInSignUp: signInSignUpReducer,
    pageTitle: pageTitleReducer
  }
})
