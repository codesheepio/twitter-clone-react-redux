import { expect } from '../test-helper'
import profileReducer from '../../src/reducers/profile'

describe('profileReducer', () => {
  it('returns correct initial state', () => {
    const expectedState = {
      name: 'Arnupharp Viratanapanu',
      screenName: 'topscores',
      numTweets: 50,
      numFollowers: 100,
      numFollowings: 200,
    }
    expect(profileReducer(undefined, {})).to.deep.equal(expectedState)
  })
})
