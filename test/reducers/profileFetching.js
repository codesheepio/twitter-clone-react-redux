import { expect } from '../test-helper'
import profileFetchingReducer from '../../src/reducers/profileFetching'
import types from '../../src/actions/types'
import { FETCHING, NO_FETCHING } from '../../src/constants/fetchingStatus'

describe('profileFetchingReducer', () => {
  it('returns correct initial state', () => {
    expect(profileFetchingReducer(undefined, {})).to.equal(NO_FETCHING)
  })

  it('changes from NO_FETCHING to FETCHING state when receiving FETCH_PROFILE_IN_PROGRESS action', () => {
    const curState = NO_FETCHING
    const action = {
      type: types.FETCH_PROFILE_IN_PROGRESS,
      payload: {},
    }
    const nextState = profileFetchingReducer(curState, action)
    const expectedState = FETCHING

    expect(nextState).to.equal(expectedState)
  })

  it('changes from FETCHING to NO_FETCHING state when receiving FETCH_PROFILE_SUCCESS action', () => {
    const curState = FETCHING
    const action = {
      type: types.FETCH_PROFILE_SUCCESS,
      payload: {},
    }
    const nextState = profileFetchingReducer(curState, action)
    const expectedState = NO_FETCHING

    expect(nextState).to.equal(expectedState)
  })

  it('does not change from NO_FETCHING state when receiving FETCH_PROFILE_SUCCESS action', () => {
    const curState = NO_FETCHING
    const action = {
      type: types.FETCH_PROFILE_SUCCESS,
      payload: [],
    }
    const nextState = profileFetchingReducer(curState, action)
    const expectedState = NO_FETCHING

    expect(nextState).to.equal(expectedState)
  })
})
