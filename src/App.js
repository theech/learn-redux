import { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { increment, decrement } from './actions/increments'
import { isLogin } from './actions/auths'

function App() {
  useEffect(() => {
    store.dispatch(increment())
    store.dispatch(decrement())
    store.dispatch(isLogin())
  })

  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Hello</h1>
      </div>
    </Provider>
  )
}

export default App
