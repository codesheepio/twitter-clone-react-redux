import React from 'react'
import { expect, mount, sinon } from '../test-helper'
import NewTweet from '../../src/components/NewTweet'

describe('NewTweet', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      name: 'Supasate Choochaisri',
      username: 'kaizerwing',
      numTweets: 1337,
      numFollowers: 500,
      numFollowings: 700,
      addTweet: sinon.spy(),
      token: 'mock_token',
    }
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

  it('shows value from internal state', () => {
    wrapper.setState({
      tweetText: 'Hello',
    })
    expect(wrapper.find('#tweetText')).to.have.value('Hello')
  })

  it('changes state when typing in input box', () => {
    wrapper.find('#tweetText').simulate('change', { target: { value: 'Hello' } })

    const expectedState = {
      tweetText: 'Hello',
    }
    expect(wrapper.state()).to.deep.equal(expectedState)
  })

  it('calls addTweet prop when submitting a new tweet', () => {
    const fakedTime = new Date(2016, 9, 1).getTime()
    const clock = sinon.useFakeTimers(fakedTime)
    wrapper.find('#tweetText').simulate('change', { target: { value: 'Hello' } })
    wrapper.find('input.btn').simulate('click')

    expect(props.addTweet).to.have.been.calledWith('Supasate Choochaisri', 'kaizerwing', 'Hello', props.token)

    clock.restore()
  })

  it('clears state after submitting a tweet', () => {
    wrapper.find('#tweetText').simulate('change', { target: { value: 'Hello' } })
    const intermediateState = {
      tweetText: 'Hello',
    }
    expect(wrapper.state()).to.deep.equal(intermediateState)

    wrapper.find('input.btn').simulate('click')
    const expectedState = {
      tweetText: '',
    }
    expect(wrapper.state()).to.deep.equal(expectedState)
  })
})
