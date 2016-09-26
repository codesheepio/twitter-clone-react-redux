import { expect } from '../test-helper'
import tweetsReducer from '../../src/reducers/tweets'
import types from '../../src/actions/types'

describe('tweetsReducer', () => {
  it('returns correct initial state', () => {
    const expectedState = []

    expect(tweetsReducer(undefined, {})).to.be.deep.equal(expectedState)
  })

  it('adds new tweet when receiving ADD_TWEET action', () => {
    const curState = [
      { id: 1, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'Hello World', timestamp: 1474531661204 },
      { id: 2, name: 'Supasate Choochaisri', screenName: 'kaizerwing', tweetText: 'CodeSheep rocks!', timestamp: 1474531661205 },
      { id: 3, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I am handsome', timestamp: 1474531661207 },
      { id: 4, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I love react!', timestamp: 1474531661209 },
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

    const nextState = tweetsReducer(curState, action)

    const expectedState = [
      { id: 1, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'Hello World', timestamp: 1474531661204 },
      { id: 2, name: 'Supasate Choochaisri', screenName: 'kaizerwing', tweetText: 'CodeSheep rocks!', timestamp: 1474531661205 },
      { id: 3, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I am handsome', timestamp: 1474531661207 },
      { id: 4, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I love react!', timestamp: 1474531661209 },
      { id: 5, name: 'Supasate Choochaisri', screenName: 'kaizerwing', tweetText: 'Cool tweet!', timestamp },
    ]

    expect(nextState).to.deep.equal(expectedState)
  })
})
