import { expect } from '../test-helper'
import followingsTweetsReducer from '../../src/reducers/followingsTweets'

describe('followingsTweetsReducer', () => {
  it('returns correct initial state', () => {
    expect(followingsTweetsReducer(undefined, {})).to.deep.equal({})
  })
})
