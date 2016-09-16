import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import profileReducer from './profile'
import tweetListReducer from './tweetList'

const rootReducer = combineReducers({
  routing: routerReducer,
  profile: profileReducer,
  tweetList: tweetListReducer,
})

export default rootReducer
