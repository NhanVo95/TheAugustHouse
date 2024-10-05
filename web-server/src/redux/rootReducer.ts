import { combineReducers } from 'redux'

// import slices
import { modeReducer } from '~/redux/features/mode/modeSlice'
import { signInSignUpReducer } from './features/signInSignUp/signInSignUp'

const rootReducer = combineReducers({
  mode: modeReducer,
  signInSignUp: signInSignUpReducer
})

export default rootReducer
