import types from '../actions/types'

const initialState = {
  name: 'N/A',
  username: 'notavailable',
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
    default:
      return state
  }
}

export default profileReducer
