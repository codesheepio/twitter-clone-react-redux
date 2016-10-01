import types from './types'

const fetchProfileInProgress = () => ({
  type: types.FETCH_PROFILE_IN_PROGRESS,
  payload: {},
})

const fetchProfileSuccess = profile => ({
  type: types.FETCH_PROFILE_SUCCESS,
  payload: {
    name: profile.name,
    username: profile.username,
  },
})

const fetchProfile = username => (dispatch) => {
  dispatch(fetchProfileInProgress())

  let uri = 'http://localhost:3000/api/TwisterUsers'
  if (username) {
    uri = `${uri}/findOne?filter={"where":{"username":"${username}"}}`
  } else {
    uri = `${uri}/findOne?filter={"where":{"username":"topscores"}}`
  }
  fetch(uri)
    .then(response => response.json())
    .then(profile => dispatch(fetchProfileSuccess(profile)))
}

const fetchNumFollowersInProgress = () => ({
  type: types.FETCH_NUM_FOLLOWERS_IN_PROGRESS,
})

const fetchNumFollowersSuccess = numFollowers => ({
  type: types.FETCH_NUM_FOLLOWERS_SUCCESS,
  payload: {
    numFollowers,
  },
})

const fetchNumFollowersFail = err => ({
  type: types.FETCH_NUM_FOLLOWERS_FAIL,
  payload: err,
  error: true,
})

const fetchNumFollowers = username => (dispatch) => {
  dispatch(fetchNumFollowersInProgress())

  const uri = `http://localhost:3000/api/Follows/count?where={"followedUsername":"${username}"}`
  fetch(uri)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then(data => dispatch(fetchNumFollowersSuccess(data.count)))
  .catch(err => dispatch(fetchNumFollowersFail(err)))
}

const fetchNumFollowingsInProgress = () => ({
  type: types.FETCH_NUM_FOLLOWINGS_IN_PROGRESS,
})

const fetchNumFollowingsSuccess = numFollowings => ({
  type: types.FETCH_NUM_FOLLOWINGS_SUCCESS,
  payload: {
    numFollowings,
  },
})

const fetchNumFollowingsFail = err => ({
  type: types.FETCH_NUM_FOLLOWINGS_FAIL,
  payload: err,
  error: true,
})

const fetchNumFollowings = username => (dispatch) => {
  dispatch(fetchNumFollowingsInProgress())

  const uri = `http://localhost:3000/api/Follows/count?where={"username":"${username}"}`
  fetch(uri)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then(data => dispatch(fetchNumFollowingsSuccess(data.count)))
  .catch(err => dispatch(fetchNumFollowingsFail(err)))
}

export {
  fetchProfile,
  fetchProfileInProgress,
  fetchProfileSuccess,
  fetchNumFollowers,
  fetchNumFollowersInProgress,
  fetchNumFollowersSuccess,
  fetchNumFollowersFail,
  fetchNumFollowings,
  fetchNumFollowingsInProgress,
  fetchNumFollowingsSuccess,
}
