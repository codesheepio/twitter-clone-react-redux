import { combineReducer } from 'redux'
import tweetListReducer from './tweetList'

const rootReducer = combineReducer({
  tweetList: tweetListReducer,
})

export default rootReducer
