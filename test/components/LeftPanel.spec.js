import React from 'react'
import { expect, shallow } from '../test-helper'
import LeftPanel from '../../src/components/LeftPanel'

describe('LeftPanel', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<LeftPanel />)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('left-panel')
    expect(wrapper).to.have.descendants('Profile')
  })
})
