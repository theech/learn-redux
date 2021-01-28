import React from 'react'
// to display state in store you have to import this what ever complonent you want
import { useSelector, useDispatch } from 'react-redux'

import { increment } from './actions/increment'
import { decrement } from './actions/decrement'
import { isLogin, isLogout } from './actions/auths'

function App() {
  // extrack the state in the store
  const counter = useSelector(state => state.counter)
  const auth = useSelector(state => state.isAuth)

  // once you have to dispatch  calling useDispatch method
  const dispatch = useDispatch();

  return (
      <div className='App'>
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

        {auth ? <h3>user is login <button onClick={() => dispatch(isLogout())}>logout</button></h3> : <h3>user is logout <button onClick={() => dispatch(isLogin())}>login</button></h3>}
      </div>
  )
}

export default App
