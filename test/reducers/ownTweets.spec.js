import { expect } from '../test-helper'
import ownTweetsReducer from '../../src/reducers/ownTweets'
import types from '../../src/actions/types'

describe('ownTweetsReducer', () => {
  it('returns correct initial state', () => {
    const expectedState = []

    expect(ownTweetsReducer(undefined, {})).to.be.deep.equal(expectedState)
  })

  it('adds new tweet when receiving ADD_TWEET action', () => {
    const curState = [
      { id: 1, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'Hello World' },
      { id: 2, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I am handsome' },
      { id: 3, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I like pop music' },
    ]
    const timestamp = Date.now()

    const action = {
      type: types.ADD_TWEET,
      payload: {
        name: 'Arnupharp Viratanapanu',
        screenName: 'topscores',
        tweetText: 'Cool tweet!',
        timestamp,
      },
    }

    const nextState = ownTweetsReducer(curState, action)

    const expectedState = [
      { id: 1, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'Hello World' },
      { id: 2, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I am handsome' },
      { id: 3, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I like pop music' },
      { id: 4, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'Cool tweet!', timestamp },
    ]

    expect(nextState).to.deep.equal(expectedState)
  })
})
