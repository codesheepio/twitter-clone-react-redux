import React from 'react'
import { expect, shallow } from '../test-helper'
import LeftPanel from '../../src/components/LeftPanel'
import Profile from '../../src/components/Profile'

describe('LeftPanel', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<LeftPanel />)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('left-panel')
    expect(wrapper.find('Profile')).to.be.present()
  })
})
