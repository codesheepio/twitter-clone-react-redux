import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import ProfileDetail from '../../src/components/ProfileDetail'

chai.use(chaiEnzyme())

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
