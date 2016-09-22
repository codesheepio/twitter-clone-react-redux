import { expect } from '../test-helper'
import profileReducer from '../../src/reducers/profile'

describe('profileReducer', () => {
  it('returns correct initial state', () => {
    const expectedState = {
      name: 'N/A',
      screenName: 'notavailable',
      numTweets: 0,
      numFollowers: 0,
      numFollowings: 0,
    }
    expect(profileReducer(undefined, {})).to.deep.equal(expectedState)
  })
})
