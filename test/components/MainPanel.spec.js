import React from 'react'
import { expect, shallow } from '../test-helper'
import MainPanel from '../../src/components/MainPanel'
import TweetList from '../../src/components/TweetList'

describe('MainPanel', () => {
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
    wrapper = shallow(<MainPanel {...props} />)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('main-panel')
    expect(wrapper.find('TweetList')).to.be.present()
  })

  it('passes tweets props to TweetList component', () => {
    expect(wrapper.find(TweetList)).to.have.prop('tweets', props.tweets)
  })
})
