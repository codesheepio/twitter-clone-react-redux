
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import configureStore from './store/configureStore'
import routes from './routes'
import './style/custom.scss'
import './style/main.scss'

const initialState = {
  profile: {
    name: 'Arnupharp Viratapanu',
    screenName: 'topscores',
    numTweets: 50,
    numFollowers: 500,
    numFollowings: 100,
  },
}

const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store} >
    <ReduxRouter>
      {routes}
    </ReduxRouter>
  </Provider>
, document.getElementById('root'))
