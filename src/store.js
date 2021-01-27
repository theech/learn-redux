import { createStore, applyMiddleware } from 'redux'
import {
    composeWithDevTools
} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers/counter'

const middleware = [thunk]

//STORE -> GLOBALIZED STATE

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

store.subscribe(() => console.log(store.getState()))

export default store
