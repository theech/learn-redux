// combine all reducer here and export as one
import counterReducer from './counter'
import authReducer from './auth'
import { combineReducers } from 'redux'

const allreducer = combineReducers({
  counter: counterReducer,
  isAuth: authReducer,
})

export default allreducer