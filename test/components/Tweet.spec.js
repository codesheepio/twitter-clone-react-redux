import React from 'react'
import { expect, shallow } from '../test-helper'
import Tweet from '../../src/components/Tweet'

describe('Tweet', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Tweet />)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('tweet')
    expect(wrapper.find('.name')).to.be.present()
    expect(wrapper.find('.screen-name')).to.be.present()
    expect(wrapper.find('.tweet-text')).to.be.present()
  })
})
