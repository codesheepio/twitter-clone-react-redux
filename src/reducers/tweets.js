import types from '../actions/types'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TWEET: {
      const nextId = state.reduce((lastId, tweet) => Math.max(lastId, tweet.id), 0) + 1
      const newTweet = {
        id: nextId,
        name: action.payload.name,
        screenName: action.payload.screenName,
        tweetText: action.payload.tweetText,
        timestamp: Date.now(),
      }
      return [
        ...state,
        newTweet,
      ]
    }
    case types.FETCH_SUCCESS: {
      return action.payload.tweets
    }
    default:
      return state
  }
}

export default reducer
