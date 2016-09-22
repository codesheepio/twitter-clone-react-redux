import { expect } from '../test-helper'
import { addTweet } from '../../src/actions/tweet'
import types from '../../src/actions/types'

describe('Tweet actions', () => {
  it('create ADD_TWEET action', () => {
    const name = 'Supasate Choochaisri'
    const screenName = 'kaizerwing'
    const tweetText = 'Hello World'
    const timestamp = Date.now()

    const action = addTweet(name, screenName, tweetText, timestamp)
    const expectedAction = {
      type: types.ADD_TWEET,
      payload: {
        name,
        screenName,
        tweetText,
        timestamp,
      },
    }
    expect(action).to.deep.equal(expectedAction)
  })
})
