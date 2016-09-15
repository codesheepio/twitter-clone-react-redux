import React from 'react'
import { expect, shallow } from '../test-helper'
import ProfileDetail from '../../src/components/ProfileDetail'

describe('ProfileDetail', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ProfileDetail />)
  })

  it('render correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('detail')
    expect(wrapper).to.have.className('last-section')
  })
})
