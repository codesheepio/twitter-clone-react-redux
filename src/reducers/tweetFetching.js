import types from '../actions/types'
import { NO_FETCHING, FETCHING } from '../constants/fetchingStatus'

const initialState = NO_FETCHING

const tweetFetchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TWEETS_IN_PROGRESS: {
      return FETCHING
    }
    case types.FETCH_TWEETS_SUCCESS: {
      return NO_FETCHING
    }
    default:
      return state
  }
}

export default tweetFetchingReducer
