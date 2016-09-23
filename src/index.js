
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
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
  ownTweets: [
    { id: 1, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'Hello World', timestamp: 1474531661204 },
    { id: 2, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I am handsome', timestamp: 1474531661207 },
    { id: 3, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I love react!', timestamp: 1474531661209 },
  ],
}

const store = configureStore(initialState)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store} >
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
, document.getElementById('root'))
