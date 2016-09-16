import { combineReducers } from 'redux'
import tweetListReducer from './tweetList'

const rootReducer = combineReducers({
  tweetList: tweetListReducer,
})

export default rootReducer
