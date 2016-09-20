import React from 'react'
import { expect, shallow } from '../test-helper'
import NewTweet from '../../src/components/NewTweet'

describe('NewTweet', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {}
    wrapper = shallow(<NewTweet {...props} />)
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
})
