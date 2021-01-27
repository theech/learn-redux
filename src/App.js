import { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { increment } from './actions/increments'


function App() {
  useEffect(() => {
    store.dispatch(increment())
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
