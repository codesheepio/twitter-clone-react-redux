import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import profileReducer from './profile'
import ownTweetsReducer from './ownTweets'

const rootReducer = combineReducers({
  routing: routerReducer,
  profile: profileReducer,
  ownTweets: ownTweetsReducer,
})

export default rootReducer
