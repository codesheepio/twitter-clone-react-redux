import React from 'react'
import { expect, reduxMount } from '../test-helper'
import LeftPanel from '../../src/components/LeftPanel'

describe('LeftPanel', () => {
  let wrapper
  let state

  beforeEach(() => {
    state = {
      profile: {
        name: 'Supasate Choochaisri',
        screenName: 'kaizerwing',
        numTweets: 1337,
        numFollowers: 500,
        numFollowings: 700,
      },
    }
    wrapper = reduxMount(<LeftPanel />, state)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('left-panel')
    expect(wrapper).to.have.descendants('Profile')
  })
})
