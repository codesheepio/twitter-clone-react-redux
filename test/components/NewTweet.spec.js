import React from 'react'
import { expect, mount } from '../test-helper'
import NewTweet from '../../src/components/NewTweet'

describe('NewTweet', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {}
    wrapper = mount(<NewTweet {...props} />)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('new-tweet')
    expect(wrapper).to.not.have.className('first-item')
  })

  it('renders first-item class if firstItem prop is set', () => {
    props = {
      firstItem: true,
    }
    wrapper.setProps(props)
    expect(wrapper).to.have.className('first-item')
  })

  it('has empty string as initial internal state', () => {
    const expectedState = { tweetText: '' }
    expect(wrapper.state()).to.deep.equal(expectedState)
  })

  it('changes state when typing in input box', () => {
    wrapper.find('#tweetText').simulate('change', { target: { value: 'Hello' } })

    const expectedState = {
      tweetText: 'Hello',
    }
    expect(wrapper.state()).to.deep.equal(expectedState)
  })
})
