import { combineReducers } from 'redux'
import profileReducer from './profile'
import tweetListReducer from './tweetList'

const rootReducer = combineReducers({
  profile: profileReducer,
  tweetList: tweetListReducer,
})

export default rootReducer
