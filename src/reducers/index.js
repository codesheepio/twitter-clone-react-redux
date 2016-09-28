import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import authReducer from './auth'
import profileReducer from './profile'
import tweetsReducer from './tweets'
import tweetFetchingReducer from './tweetFetching'
import profileFetchingReducer from './profileFetching'

const rootReducer = combineReducers({
  router: routerStateReducer,
  auth: authReducer,
  profile: profileReducer,
  tweets: tweetsReducer,
  fetching: tweetFetchingReducer,
  profileFetching: profileFetchingReducer,
})

export default rootReducer
