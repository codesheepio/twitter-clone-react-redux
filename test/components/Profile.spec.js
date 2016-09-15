import React from 'react'
import { expect, shallow } from '../test-helper'
import Profile from '../../src/components/Profile'
import ProfileHeader from '../../src/components/ProfileHeader'
import ProfileDetail from '../../src/components/ProfileDetail'

describe('Profile', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Profile />)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('profile')
    expect(wrapper).to.contain(<ProfileHeader />)
    expect(wrapper).to.contain(<ProfileDetail />)
  })
})
