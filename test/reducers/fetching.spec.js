import { expect } from '../test-helper'
import tweetFetchingReducer from '../../src/reducers/tweetFetching'
import { NO_FETCHING, FETCHING } from '../../src/constants/fetchingStatus'
import types from '../../src/actions/types'

describe('tweetFetchingReducer', () => {
  it('returns correct initial state', () => {
    expect(tweetFetchingReducer(undefined, {})).to.equal(NO_FETCHING)
  })

  it('changes from NO_FETCHING to FETCHING state when receiving FETCH_TWEETS_IN_PROGRESS action', () => {
    const curState = NO_FETCHING
    const action = {
      type: types.FETCH_TWEETS_IN_PROGRESS,
      payload: {},
    }
    const nextState = tweetFetchingReducer(curState, action)
    const expectedState = FETCHING

    expect(nextState).to.equal(expectedState)
  })

  it('changes from FETCHING to NO_FETCHING state when receiving FETCH_TWEETS_SUCCESS action', () => {
    const curState = FETCHING
    const action = {
      type: types.FETCH_TWEETS_SUCCESS,
      payload: [],
    }
    const nextState = tweetFetchingReducer(curState, action)
    const expectedState = NO_FETCHING

    expect(nextState).to.equal(expectedState)
  })

  it('does not change from NO_FETCHING state when receiving FETCH_TWEETS_SUCCESS action', () => {
    const curState = NO_FETCHING
    const action = {
      type: types.FETCH_TWEETS_SUCCESS,
      payload: [],
    }
    const nextState = tweetFetchingReducer(curState, action)
    const expectedState = NO_FETCHING

    expect(nextState).to.equal(expectedState)
  })
})
