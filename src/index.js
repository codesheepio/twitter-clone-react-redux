
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import configureStore from './store/configureStore'
import routes from './routes'
import { saveState, loadState } from './utils/localStorage'
import './style/custom.scss'
import './style/main.scss'

const initialState = loadState()

const store = configureStore(initialState)

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
  })
})

ReactDOM.render(
  <Provider store={store} >
    <ReduxRouter>
      {routes}
    </ReduxRouter>
  </Provider>
, document.getElementById('root'))
