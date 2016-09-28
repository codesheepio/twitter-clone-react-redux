import React from 'react'
import { expect, reduxMount, sinon } from '../test-helper'
import BodyContainer from '../../src/components/BodyContainer'

describe('BodyContainer', () => {
  let wrapper
  let props
  let state

  beforeEach(() => {
    props = {
      username: '',
      fetchProfile: sinon.spy(),
    }
    state = {
      profile: {
        name: '',
        username: '',
        numTweets: 0,
        numFollowers: 0,
        numFollowings: 0,
      },
      tweets: [],
      router: {
        params: {
          username: '',
        },
      },
      auth: {
        isLogin: false,
        name: '',
        username: '',
      },
    }
    wrapper = reduxMount(<BodyContainer {...props} />, state)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('container')
    expect(wrapper).to.have.className('body')
    expect(wrapper).to.have.descendants('LeftPanel')
    expect(wrapper).to.have.descendants('MainPanel')
    expect(wrapper).to.not.have.descendants('NewTweet')
  })

  it('render NewTweet if enableTweet prop is enable', () => {
    props = {
      enableTweet: true,
      username: '',
      fetchProfile: sinon.spy(),
    }
    wrapper = reduxMount(<BodyContainer {...props} />, state)
    expect(wrapper).to.have.descendants('NewTweet')
  })
})
