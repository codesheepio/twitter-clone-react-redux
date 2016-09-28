import React from 'react'
import { expect, shallow } from '../test-helper'
import ProfileHeader from '../../src/components/ProfileHeader'

describe('ProfileHeader', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      name: 'Supasate Choochaisri',
      username: 'kaizerwing',
    }
    wrapper = shallow(<ProfileHeader {...props} />)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('header')

    expect(wrapper.find('.name')).to.be.present()
    expect(wrapper.find('.screen-name')).to.be.present()
  })
})
