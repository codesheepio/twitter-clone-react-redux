import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import profileReducer from './profile'
import tweetsReducer from './tweets'

const rootReducer = combineReducers({
  router: routerStateReducer,
  profile: profileReducer,
  tweets: tweetsReducer,
})

export default rootReducer
