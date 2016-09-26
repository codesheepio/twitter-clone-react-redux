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

  let mockTweets
  if (!screenName) {
    mockTweets = [
      { id: 1, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'Hello World', timestamp: 1474531661204 },
      { id: 2, name: 'Supasate Choochaisri', screenName: 'kaizerwing', tweetText: 'CodeSheep rocks!', timestamp: 1474531661205 },
      { id: 3, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I am handsome', timestamp: 1474531661207 },
      { id: 4, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I love react!', timestamp: 1474531661209 },
      { id: 5, name: 'Supasate Choochaisri', screenName: 'kaizerwing', tweetText: 'CodeSheep rocks!', timestamp: 1474531661210 },
      { id: 6, name: 'Jirawute Juengsiragulwit', screenName: 'jjirawute', tweetText: 'Do you like pop music?', timestamp: 1474531661211 },
    ]
  } else if (screenName === 'topscores') {
    mockTweets = [
      { id: 1, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'Hello World', timestamp: 1474531661204 },
      { id: 3, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I am handsome', timestamp: 1474531661207 },
      { id: 4, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I love react!', timestamp: 1474531661209 },
    ]
  } else if (screenName === 'kaizerwing') {
    mockTweets = [
      { id: 2, name: 'Supasate Choochaisri', screenName: 'kaizerwing', tweetText: 'CodeSheep rocks!', timestamp: 1474531661205 },
      { id: 5, name: 'Supasate Choochaisri', screenName: 'kaizerwing', tweetText: 'CodeSheep rocks!', timestamp: 1474531661210 },
    ]
  } else if (screenName === 'jjirawute') {
    mockTweets = [
      { id: 6, name: 'Jirawute Juengsiragulwit', screenName: 'jjirawute', tweetText: 'Do you like pop music?', timestamp: 1474531661211 },
    ]
  } else {
    mockTweets = []
  }

  dispatch(fetchSuccess(mockTweets))
}

export {
  addTweet,
  fetchInProgress,
  fetchSuccess,
  fetchTweets,
}
