import { expect } from '../test-helper'
import tweetListReducer from '../../src/reducers/tweetList'
import types from '../../src/actions/types'

describe('tweetListReducer', () => {
  it('returns correct initial state', () => {
    const expectedState = [
      { id: 1, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'Hello World' },
      { id: 2, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I am handsome' },
      { id: 3, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I like pop music' },
    ]

    expect(tweetListReducer(undefined, {})).to.be.deep.equal(expectedState)
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
        name: 'Supasate Choochaisri',
        screenName: 'kaizerwing',
        tweetText: 'Cool tweet!',
        timestamp,
      },
    }

    const nextState = tweetListReducer(curState, action)

    const expectedState = [
      { id: 1, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'Hello World' },
      { id: 2, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I am handsome' },
      { id: 3, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I like pop music' },
      { id: 4, name: 'Supasate Choochaisri', screenName: 'kaizerwing', tweetText: 'Cool tweet!', timestamp },
    ]

    expect(nextState).to.deep.equal(expectedState)
  })
})
