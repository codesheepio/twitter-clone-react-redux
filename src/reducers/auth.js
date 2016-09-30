import types from '../actions/types'

const initialState = {
  isLogin: false,
  username: '',
  name: '',
  token: '',
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      return {
        isLogin: true,
        username: action.payload.username,
        name: action.payload.name,
        token: action.payload.token,
      }
    }
    case types.LOGIN_FAIL: {
      return {
        isLogin: false,
        username: '',
        name: '',
        token: null,
      }
    }
    default: {
      return state
    }
  }
}

export default authReducer
