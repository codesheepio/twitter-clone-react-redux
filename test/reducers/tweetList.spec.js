import { expect } from '../test-helper'
import tweetListReducer from '../../src/reducers/tweetList'

describe('tweetListReducer', () => {
  it('returns correct initial state', () => {
    const expectedState = [
      { id: 1, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'Hello World' },
      { id: 2, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I am handsome' },
      { id: 3, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I like pop music' },
    ]

    expect(tweetListReducer(undefined, {})).to.be.deep.equal(expectedState)
  })
})
