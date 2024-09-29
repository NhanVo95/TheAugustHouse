import { combineReducers } from 'redux'

// import slices
import { modeReducer } from '~/redux/features/mode/modeSlice'

const rootReducer = combineReducers({
  mode: modeReducer
})

export default rootReducer
