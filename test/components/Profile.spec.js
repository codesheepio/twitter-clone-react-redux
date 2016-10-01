import React from 'react'
import { expect, mount, sinon } from '../test-helper'
import Profile from '../../src/components/Profile'
import ProfileHeader from '../../src/components/ProfileHeader'
import ProfileDetail from '../../src/components/ProfileDetail'

describe('Profile', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      name: 'Supaste Choochaisri',
      username: 'kaizerwing',
      numTweets: 1337,
      numFollowers: 400,
      numFollowings: 555,
      fetchNumFollowers: sinon.spy(),
      fetchNumFollowings: sinon.spy(),
    }
    wrapper = mount(<Profile {...props} />)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('profile')
    expect(wrapper).to.contain(<ProfileHeader name={props.name} username={props.username} />)
    expect(wrapper).to.contain(
      <ProfileDetail
        numTweets={props.numTweets}
        numFollowers={props.numFollowers}
        numFollowings={props.numFollowings}
      />
    )
  })

  it('passes name and username to ProfileHeader via props', () => {
    const profileHeaderWrapper = wrapper.find('ProfileHeader')
    expect(profileHeaderWrapper).to.have.prop('name', props.name)
    expect(profileHeaderWrapper).to.have.prop('username', props.username)
  })

  it('passes numTweet, numFollowers, numFollowings to ProfileDetail via props', () => {
    const profileDetailWrapper = wrapper.find('ProfileDetail')
    expect(profileDetailWrapper).to.have.prop('numTweets', props.numTweet)
    expect(profileDetailWrapper).to.have.prop('numFollowers', props.numFollowers)
    expect(profileDetailWrapper).to.have.prop('numFollowings', props.numFollowings)
  })
})
