import React from 'react'
import { expect, reduxMount } from '../test-helper'
import MainPanel from '../../src/components/MainPanel'

describe('MainPanel', () => {
  let wrapper
  let props
  let state

  beforeEach(() => {
    props = {
      enableTweet: false,
    }
    state = {
      tweetList: [],
    }
    wrapper = reduxMount(<MainPanel {...props} />, state)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('main-panel')
    expect(wrapper).to.have.descendants('TweetList')
    expect(wrapper).to.not.have.descendants('NewTweet')
  })

  it('contains NewTweet if enableTweet prop is enable', () => {
    props = {
      enableTweet: true,
    }
    wrapper = reduxMount(<MainPanel {...props} />, state)
    expect(wrapper).to.have.descendants('NewTweet')
  })
})
