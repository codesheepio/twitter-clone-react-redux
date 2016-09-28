import types from './types'

const loginSuccess = (username, name) => ({
  type: types.LOGIN_SUCCESS,
  payload: {
    username,
    name,
  },
})

const loginFail = err => ({
  type: types.LOGIN_FAIL,
  payload: err,
  error: true,
})

const login = (email, password) => (dispatch) => {
  fetch('http://localhost:3000/api/TwisterUser/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
  .then(response => response.json())
  .then(authInfo => dispatch(loginSuccess(authInfo.username, authInfo.name)))
  .catch(error => dispatch(loginFail(error)))
}


export {
  login,
  loginSuccess,
  loginFail,
}
