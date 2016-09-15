import React from 'react'
import { expect, shallow } from '../test-helper'
import BodyContainer from '../../src/components/BodyContainer'

describe('BodyContainer', () => {
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
    wrapper = shallow(<BodyContainer {...props} />)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('container body')
    expect(wrapper).to.have.descendants('LeftPanel')
    expect(wrapper).to.have.descendants('MainPanel')
  })

  it('passes tweets to MainPanel via props', () => {
    expect(wrapper.find('MainPanel')).to.have.prop('tweets', props.tweets)
  })
})
