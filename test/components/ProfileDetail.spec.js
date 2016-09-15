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

    expect(wrapper).to.have.exactly(3).descendants('.col')

    const cols = wrapper.find('.col')
    expect(cols.at(0)).to.have.descendants('.text')
    expect(cols.at(0)).to.have.descendants('.number')
    expect(cols.at(1)).to.have.descendants('.text')
    expect(cols.at(1)).to.have.descendants('.number')
    expect(cols.at(2)).to.have.descendants('.text')
    expect(cols.at(2)).to.have.descendants('.number')
  })
})
