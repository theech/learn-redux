import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// import all reducer from reducer index
import rootReducer from './reducers'

const middleware = [thunk]

//STORE -> GLOBALIZED STATE

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

store.subscribe(() => console.log(store.getState()))

export default store
