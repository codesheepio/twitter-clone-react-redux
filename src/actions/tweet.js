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

const fetchInProgress = () => ({
  type: types.FETCH_IN_PROGRESS,
  payload: {},
})

const fetchSuccess = tweets => ({
  type: types.FETCH_SUCCESS,
  payload: {
    tweets,
  },
})

const fetchTweets = screenName => (dispatch) => {
  dispatch(fetchInProgress())

  let uri = 'http://localhost:3000/api/Tweets'
  if (screenName) {
    uri = `${uri}?filter={%22where%22:{%22screenName%22:%22${screenName}%22}}`
  }
  fetch(uri)
    .then(response => response.json())
    .then((tweets) => {
      dispatch(fetchSuccess(tweets))
    })
}

export {
  addTweet,
  fetchInProgress,
  fetchSuccess,
  fetchTweets,
}
