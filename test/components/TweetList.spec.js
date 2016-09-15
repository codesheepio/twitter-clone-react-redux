import React from 'react'
import { expect, mount } from '../test-helper'
import TweetList from '../../src/components/TweetList'
import Tweet from '../../src/components/Tweet'

describe('TweetList', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      tweets: [
        { id: 1, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'Hello World' },
        { id: 2, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I am handsome' },
        { id: 3, name: 'Arnupharp Viratanapanu', screenName: 'topscores', tweetText: 'I like pop music' },
      ],
    }
    wrapper = mount(<TweetList {...props} />)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('tweet-list')
  })

  it('show tweets', () => {
    expect(wrapper).to.have.exactly(3).descendants(Tweet)
  })

  it('has first-item class for first tweet', () => {
    expect(wrapper.find('Tweet').at(0)).to.have.className('first-item')
  })
})
