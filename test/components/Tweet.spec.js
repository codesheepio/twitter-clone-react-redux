import React from 'react'
import { expect, shallow } from '../test-helper'
import Tweet from '../../src/components/Tweet'

describe('Tweet', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      id: 1,
      name: 'Supasate Choochaisri',
      username: 'kaizerwing',
      tweetText: 'I love coding',
    }
    wrapper = shallow(<Tweet {...props} />)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('tweet')
    expect(wrapper.find('.name')).to.be.present()
    expect(wrapper.find('.screen-name')).to.be.present()
    expect(wrapper.find('.tweet-text')).to.be.present()
  })

  it('renders name from props', () => {
    expect(wrapper.find('.name')).to.have.text(props.name)
  })

  it('renders screen name from props', () => {
    expect(wrapper.find('.screen-name')).to.have.text(`@${props.username}`)
  })

  it('renders tweet text from props', () => {
    expect(wrapper.find('.tweet-text')).to.have.text(props.tweetText)
  })
})
