import types from '../actions/types'

const initialState = {
  name: 'N/A',
  username: 'notavailable',
  isFollowing: false,
  numTweets: 0,
  numFollowers: 0,
  numFollowings: 0,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PROFILE_SUCCESS: {
      return {
        ...state,
        name: action.payload.name,
        username: action.payload.username,
      }
    }
    case types.FETCH_NUM_FOLLOWERS_SUCCESS: {
      return {
        ...state,
        numFollowers: action.payload.numFollowers,
      }
    }
    case types.FETCH_NUM_FOLLOWINGS_SUCCESS: {
      return {
        ...state,
        numFollowings: action.payload.numFollowings,
      }
    }
    case types.SET_FOLLOW_STATE: {
      return {
        ...state,
        isFollowing: action.payload.isFollowing,
      }
    }
    case types.LOGOUT: {
      return initialState
    }
    default:
      return state
  }
}

export default profileReducer
