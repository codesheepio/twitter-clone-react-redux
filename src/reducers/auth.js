import types from '../actions/types'

const initialState = {
  isLogin: false,
  username: '',
  name: '',
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      return {
        isLogin: true,
        username: action.payload.username,
        name: action.payload.name,
      }
    }
    case types.LOGIN_FAIL: {
      return {
        isLogin: false,
        username: '',
        name: '',
      }
    }
    default: {
      return state
    }
  }
}

export default authReducer
