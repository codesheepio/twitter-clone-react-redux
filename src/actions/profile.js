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


export {
  fetchProfile,
  fetchProfileInProgress,
  fetchProfileSuccess,
}
