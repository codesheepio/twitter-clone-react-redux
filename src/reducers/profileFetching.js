import types from '../actions/types'
import { FETCHING, NO_FETCHING } from '../constants/fetchingStatus'

const initialState = NO_FETCHING

const profileFetchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PROFILE_IN_PROGRESS: {
      return FETCHING
    }
    case types.FETCH_PROFILE_SUCCESS: {
      return NO_FETCHING
    }
    default: {
      return state
    }
  }
}

export default profileFetchingReducer
