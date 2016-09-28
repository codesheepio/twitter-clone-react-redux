import { expect } from '../test-helper'
import types from '../../src/actions/types'
import { fetchProfileInProgress, fetchProfileSuccess } from '../../src/actions/profile'

describe('Profile actions', () => {
  it('creates FETCH_PROFILE_IN_PROGRESS action', () => {
    const action = fetchProfileInProgress()
    const expectedAction = {
      type: types.FETCH_PROFILE_IN_PROGRESS,
      payload: {},
    }
    expect(action).to.deep.equal(expectedAction)
  })

  it('create FETCH_PROFILE_SUCCESS action', () => {
    const action = fetchProfileSuccess({
      username: 'kaizerwing',
      name: 'Supasate Choochaisri',
    })
    const expectedAction = {
      type: types.FETCH_PROFILE_SUCCESS,
      payload: {
        username: 'kaizerwing',
        name: 'Supasate Choochaisri',
      },
    }
    expect(action).to.deep.equal(expectedAction)
  })
})
