import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import profileReducer from './profile'
import ownTweetsReducer from './ownTweets'
import followingsTweetsReducer from './followingsTweets'

const rootReducer = combineReducers({
  routing: routerReducer,
  profile: profileReducer,
  ownTweets: ownTweetsReducer,
  followingsTweets: followingsTweetsReducer,
})

export default rootReducer
