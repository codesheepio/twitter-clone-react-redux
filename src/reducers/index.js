import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import profileReducer from './profile'
import tweetsReducer from './tweets'

const rootReducer = combineReducers({
  routing: routerReducer,
  profile: profileReducer,
  tweets: tweetsReducer,
})

export default rootReducer
