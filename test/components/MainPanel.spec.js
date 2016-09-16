import React from 'react'
import { expect, reduxMount } from '../test-helper'
import MainPanel from '../../src/components/MainPanel'

describe('MainPanel', () => {
  let wrapper
  let state

  beforeEach(() => {
    state = {
      tweetList: [],
    }
    wrapper = reduxMount(<MainPanel />, state)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('main-panel')
    expect(wrapper).to.have.descendants('TweetList')
  })
})
