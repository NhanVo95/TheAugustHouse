// Redux: State management tool
import { configureStore } from '@reduxjs/toolkit'

import { pageTitleReducer } from './features/pageTitle/pageTitleSlice'
import { boardReducer } from './features/board/boardSlice'
import { modeReducer } from './features/mode/modeSlice'
import { titleReducer } from './features/title/titleSlice'

export default configureStore({
  reducer: {
    pageTitle: pageTitleReducer,
    board: boardReducer,
    mode: modeReducer,
    title: titleReducer
  }
})
