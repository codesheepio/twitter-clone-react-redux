import { push } from 'redux-router'
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

const logout = () => (dispatch) => {
  dispatch({
    type: types.LOGOUT,
  })
  dispatch(push('/'))
}

const signupInProgress = () => ({
  type: types.SIGNUP_IN_PROGRESS,
})

const signupSuccess = (username, name) => ({
  type: types.SIGNUP_SUCCESS,
  payload: {
    username,
    name,
  },
})

const signupFail = err => ({
  type: types.SIGNUP_FAIL,
  payload: err,
  error: true,
})

const signup = (username, firstname, lastname, email, password) => (dispatch) => {
  dispatch(signupInProgress())

  fetch('http://localhost:3000/api/TwisterUsers', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      name: `${firstname} ${lastname}`,
      email,
      password,
    }),
  })
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then((authInfo) => {
    dispatch(signupSuccess(authInfo.username, authInfo.name, authInfo.token))
    dispatch(push('/login'))
  })
  .catch(error => dispatch(signupFail(error)))
}


export {
  login,
  loginInProgress,
  loginSuccess,
  loginFail,
  logout,
  signup,
  signupInProgress,
  signupSuccess,
  signupFail,
}
