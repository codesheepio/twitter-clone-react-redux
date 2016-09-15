import React from 'react'
import { expect, shallow } from '../test-helper'
import TweetList from '../../src/components/TweetList'
import Tweet from '../../src/components/Tweet'

describe('TweetList', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      tweets: [
        { id: 1, name: 'Arnupharp Viratanapanu', screenName: 'topscores', text: 'Hello World' },
        { id: 2, name: 'Arnupharp Viratanapanu', screenName: 'topscores', text: 'I am handsome' },
        { id: 3, name: 'Arnupharp Viratanapanu', screenName: 'topscores', text: 'I like pop music' },
      ],
    }
    wrapper = shallow(<TweetList {...props} />)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('tweet-list')
  })

  it('show tweets', () => {
    expect(wrapper).to.have.exactly(3).descendants(Tweet)
  })
})
