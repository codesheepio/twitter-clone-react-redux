import types from '../actions/types'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TWEET: {
      const newTweet = {
        id: action.payload.id,
        name: action.payload.name,
        username: action.payload.username,
        tweetText: action.payload.tweetText,
        timestamp: action.payload.timestamp,
      }
      return [
        newTweet,
        ...state,
      ]
    }
    case types.FETCH_TWEETS_SUCCESS: {
      return action.payload.tweets.sort((a, b) => {
        if (a.timestamp > b.timestamp) {
          return -1
        } else if (a.timestamp < b.timestamp) {
          return 1
        }
        return 0
      })
    }
    default:
      return state
  }
}

export default reducer
