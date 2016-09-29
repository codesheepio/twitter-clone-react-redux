import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { expect, nock } from '../test-helper'
import { addTweet } from '../../src/actions/tweet'
import types from '../../src/actions/types'

describe('Tweet actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('create ADD_TWEET action', () => {
    nock('http://localhost:3000/')
      .post('/api/Tweets')
      .reply(200, {
        id: 123,
        name: 'Supasate Choochaisri',
        username: 'kaizerwing',
        tweetText: 'Hello World',
        timestamp: 1431531241,
      })

    const expectedActions = [
      { type: types.ADD_TWEET_IN_PROGRESS },
      { type: types.ADD_TWEET,
        payload: {
          id: 123,
          name: 'Supasate Choochaisri',
          username: 'kaizerwing',
          tweetText: 'Hello World',
          timestamp: 1431531241,
        },
      },
      { type: types.ADD_TWEET_SUCCESS },
    ]

    const mockStore = configureMockStore([thunk])
    const store = mockStore({ tweets: [] })

    return store.dispatch(addTweet('Supasate Choochaisri', 'kaizerwing', 'Hello World', 1431531241))
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      })
  })
})
