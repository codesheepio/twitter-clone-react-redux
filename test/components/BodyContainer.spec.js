import React from 'react'
import { expect, reduxMount } from '../test-helper'
import BodyContainer from '../../src/components/BodyContainer'

describe('BodyContainer', () => {
  let wrapper
  let state

  beforeEach(() => {
    state = {
      tweetList: [],
    }
    wrapper = reduxMount(<BodyContainer />, state)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('container')
    expect(wrapper).to.have.className('body')
    expect(wrapper).to.have.descendants('LeftPanel')
    expect(wrapper).to.have.descendants('MainPanel')
  })
})
