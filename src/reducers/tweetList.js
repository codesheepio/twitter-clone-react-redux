import types from '../actions/types'

const initialState = [
  { id: 1, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'Hello World' },
  { id: 2, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I am handsome' },
  { id: 3, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I like pop music' },
]

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
    default:
      return state
  }
}

export default reducer
