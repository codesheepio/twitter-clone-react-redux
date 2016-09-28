import types from './types'

const addTweet = (name, username, tweetText, timestamp) => ({
  type: types.ADD_TWEET,
  payload: {
    name,
    username,
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

const fetchTweets = username => (dispatch) => {
  dispatch(fetchInProgress())

  let uri = 'http://localhost:3000/api/Tweets'
  if (username) {
    uri = `${uri}?filter={%22where%22:{%22username%22:%22${username}%22}}`
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
