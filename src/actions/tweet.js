import types from './types'

const addTweet = (name, screenName, tweetText, timestamp) => ({
  type: types.ADD_TWEET,
  payload: {
    name,
    screenName,
    tweetText,
    timestamp,
  },
})

export {
  addTweet, // eslint-disable-line
}
