import types from './types'

const loginInProgress = () => ({
  type: types.LOGIN_IN_PROGRESS,
})

const loginSuccess = (username, name, token) => ({
  type: types.LOGIN_SUCCESS,
  payload: {
    username,
    name,
    token,
  },
})

const loginFail = err => ({
  type: types.LOGIN_FAIL,
  payload: err,
  error: true,
})

const login = (username, password) => (dispatch) => {
  dispatch(loginInProgress())

  fetch('http://localhost:3000/api/TwisterUsers/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
  .then(response => response.json())
  .then(authInfo => dispatch(loginSuccess(authInfo.username, authInfo.name, authInfo.token)))
  .catch(error => dispatch(loginFail(error)))
}


export {
  login,
  loginInProgress,
  loginSuccess,
  loginFail,
}
